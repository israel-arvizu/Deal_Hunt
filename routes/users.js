var express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult} = require('express-validator');
const db = require('../db/models');
const { checkPassword, generatePass} = require('./bcrypt')
const bcrypt = require('bcryptjs')
const { signinUser, signoutUser, requireAuth, restoreUser} = require('../auth');
const { sequelize } = require('../db/models');
const { Op } = require("sequelize");

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {

// });

router.get('/signup', csrfProtection, asyncHandler(async (req, res, next) => {
    const user = db.User.build();

    res.render('signup', {
        csrfToken: req.csrfToken(),
        errors: [],
        user,
        title: "Register"

     });

}));

const signUpValidator = [
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('hashedPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.hashedPassword) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
]



router.post('/signup', csrfProtection, signUpValidator, asyncHandler(async(req, res, next) =>{

    const {
        firstName,
        lastName,
        email,
        hashedPassword
    } = req.body
    const hashPass = await generatePass(hashedPassword)

    const user = db.User.build({
        firstName,
        lastName,
        email,
        hashedPassword: hashPass
    })

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        await user.save();
        signinUser(req, res, user);
        res.redirect('/');
    }else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('signup', {
            title: "Register",
            user,
            errors,
            csrfToken: req.csrfToken()
        })
    }
}));

router.get('/signin', csrfProtection, asyncHandler (async(req, res, next) => {
    res.render('signin', {
        title:'Sign In',
        errors: [],
        csrfToken: req.csrfToken()
    })

}));

const signInValidators = [
 check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
 check('hashedPassword')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a value for Password'),
];

router.post('/signin', csrfProtection, signInValidators, asyncHandler (async(req,res, next) => {
    const {
        email,
        hashedPassword
    } = req.body
    let errors = []
    const validatorErrors = validationResult(req)

    if(validatorErrors.isEmpty()){
      const user = await db.User.findOne({
          where: { email }
      })
      console.log('LOOKING FOR USER')

      if (user) {
        console.log('FOUND USER', user);
        const userPass = user.hashedPassword
        const checkedVar = await bcrypt.compare(hashedPassword, userPass.toString())

        if(checkedVar) {
          signinUser(req, res, user);
          res.redirect('/');
        }

        errors.push("Failed Login")
      }else{
        errors.push("No User Found")
      }

    }

      errors = validatorErrors.array().map((error) => error.msg);
      res.render('signin', {
        title:"Sign In",
        email,
        errors,
        csrfToken: req.csrfToken()
    })


}))

router.get('/signout', csrfProtection, asyncHandler(async(req, res) => {
  signoutUser(req, res);
  res.redirect('/');
}))

router.get('/:id(\\d+)/favoritelist',csrfProtection,  asyncHandler(async(req, res) => {
  const requestedUser = req.params.id;
  const { userId } = req.session.auth;
  const [favListQuery, metadata] = await sequelize.query(`SELECT * FROM "Albums" INNER JOIN "FavoriteLists" ON "Albums".id = "FavoriteLists"."albumId" INNER JOIN "Users" ON "FavoriteLists"."userId" = "Users".id WHERE ("Albums".id = @"albumId") AND ("Users".id = ${requestedUser})`)
  let songArray = [];
  const songs = favListQuery.map((album)  => {songArray.push(album.songList.split('%'))})
  res.render('favorite-list', {
    favListQuery,
    songArray,
    userId,
    csrfToken: req.csrfToken()
  });
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async(req, res, next)=>{
  const requestedUser = req.params.id;
  const { userId } = req.session.auth;
  const loggedInUser = await db.User.findByPk(userId);
  const [favListQuery, metadata] = await sequelize.query(`SELECT * FROM "Albums" INNER JOIN "FavoriteLists" ON "Albums".id = "FavoriteLists"."albumId" INNER JOIN "Users" ON "FavoriteLists"."userId" = "Users".id WHERE ("Albums".id = @"albumId") AND ("Users".id = ${requestedUser})`)


  if(userId === parseInt(requestedUser)){
    const user = await db.User.findByPk(userId);

    res.render('profile-page', {
      title: `${user.firstName}'s Page`,
      favListQuery,
      userId,
      loggedInUser,
      csrfToken: req.csrfToken()
    })

  }else {
    const originUser = await db.User.findByPk(requestedUser);
    res.render('guest-page', {
      title: `${originUser.firstName}'s Page`,
      favListQuery,
      userId,
      csrfToken: req.csrfToken()
    })
  }

}))

router.put('/favorite-list/:id(\\d+)', asyncHandler(async(req, res) => {
  const albumId = await db.Album.findByPk(req.params.id);
  const {userId} = req.session.auth;

  if(userId) {
    const addedAlbum = await db.FavoriteList.build({
        userId,
        albumId: +req.params.id
    })

    await addedAlbum.save();

    res.json({
      message: 'Added'
    })
  }else {
    res.json({
      message: 'Failed'
    })
    window.location.href = "/users/signin";
  }
}))

router.put('/favorite-list/remove/:id(\\d+)', asyncHandler(async(req, res) => {
  const {userId} = req.session.auth;
  const albumId = req.params.id;
  const list = await db.FavoriteList.findOne({where: {
    [Op.and]: [
      {userId: userId},
      {albumId: albumId}
    ]
  }});

  if(userId){
    list.destroy();
    console.log('Destroyed Album')
    res.json({
      message: 'Destroyed'
    })

  }else{
    res.json({
      message: 'Failed'
    })
  }
}))

router.post(
  "/demo",
  asyncHandler(async (req, res) => {
    const user = await db.User.findOne({
      where: {
        email: 'karmaissniping@dmxs8.com'
      }
    });

    signinUser(req, res, user);
    res.redirect('/')
  })
);

router.get('/socials', csrfProtection, asyncHandler(async(req,res) => {
  if (req.session.auth) {
    const {userId} = req.session.auth;
    const loggedInUser = await db.User.findByPk(userId);
    res.render('socials', {
      title: 'Socials',
      userId,
      loggedInUser,
      csrfToken: req.csrfToken()
    })

  } else {

    res.render('guest-socials', {
      title: 'Guest-Socials',

      csrfToken: req.csrfToken()
    })
  }
}))


module.exports = router;
