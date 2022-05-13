var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler, clickId } = require('./utils');
const { check, validationResult} = require('express-validator');
const db = require('../db/models');
const { sequelize } = require('../db/models');
const { Op } = require("sequelize");

/* GET home page. */
router.get('/',csrfProtection, asyncHandler(async(req, res, next)=> {

  const albums = await db.Album.findAll({
    order: [['rating', 'DESC']],
    limit: 10
    })

  if(req.session.auth) {
    const { userId } = req.session.auth; // ALLOWS THE BUTTON 'PROFILE' TO WORK AND TAKE YOU TO THAT USER'S PROFILE PAGE
    const loggedInUser = await db.User.findByPk(userId)
    const [favListQuery, metadata] = await sequelize.query(`SELECT * FROM "Albums" INNER JOIN "FavoriteLists" ON "Albums".id = "FavoriteLists"."albumId" INNER JOIN "Users" ON "FavoriteLists"."userId" = "Users".id WHERE ("Albums".id = @"albumId") AND ("Users".id = ${userId})`)
    let songArray = [];
    const songs = favListQuery.map((album)  => {songArray.push(album.songList.split('%'))})
    res.render('home-logged-in', {
      title: 'Home',
      albums,
      userId ,
      loggedInUser,
      songs,
      favListQuery,
      csrfToken: req.csrfToken()

    });
  }else
    res.render('home-guest', {
    title: 'Home',
    albums,
    csrfToken: req.csrfToken()
});
}));


router.get('/albums', csrfProtection,  asyncHandler(async (req, res) =>{

  const albums = await db.Album.findAll();

  if(req.session.auth){
    const { userId } = req.session.auth
    res.render('albums', {
      title: 'Albums',
      albums,
      userId,
      csrfToken: req.csrfToken()
    })
  }

  res.render('albums-guest', {
    title: 'Albums',
    albums,
    csrfToken: req.csrfToken()
  })
}));

router.get('/about',csrfProtection, asyncHandler(async(req, res) => {
  if(req.session.auth){
    const { userId } = req.session.auth
    res.render('about', {
      Title: 'About',
      userId,
      csrfToken: req.csrfToken()
    })
  }

  res.render('guest-about', {
    Title: 'About',
    csrfToken: req.csrfToken()
  })
}));

router.get('/settings', csrfProtection, asyncHandler(async(req, res, next) => {
  const { userId } = req.session.auth;
  const user = await db.User.findByPk(userId);
  console.log(user)
  const {
    firstName,
    lastName,
    // email
  } = user;

  res.render('settings', {
    csrfToken: req.csrfToken(),
    errors: [],
    user,
    title: "Settings",
    userId
  })
}) )

const updateValidator = [
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
// check('email')
//   .exists({ checkFalsy: true })
//   .withMessage('Please provide a value for Email Address')
//   .isLength({ max: 255 })
//   .withMessage('Email Address must not be more than 255 characters long')
//   .isEmail()
//   .withMessage('Email Address is not a valid email')
//   .custom((value) => {
//     return db.User.findOne({ where: { email: value } })
//       .then((user) => {
//         if (user) {
//           return Promise.reject('The provided Email Address is already in use by another account');
//         }
//       });
//   }),
]

router.post('/settings', csrfProtection, updateValidator, asyncHandler(async(req, res, next) => {
  const { userId } = req.session.auth;
  const user = await db.User.findByPk(userId);

  const {
    firstName,
    lastName,
    // email,
  } = req.body;

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()) {
    await user.update({
      firstName,
      lastName,
      // email
    })
    res.redirect('/settings');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('settings', {
      title: "Settings",
      user,
      errors,
      csrfToken: req.csrfToken(),
      userId
  })

}
}))


router.get('/albums/:id(\\d+)', csrfProtection, updateValidator, asyncHandler(async(req, res) => {
  res.send("WWWWWWWWWWW")
  const albumId = req.params.id;
  const album = db.Album.findByPk(albumId)
  const reviews = db.Review.findAll({
    where: {
      albumId

    },
    order: [['createdAt', 'DESC']]

  })

//   if (req.session.auth) {
//     const { userId } = req.session.auth;

//     res.render('album-page', album, userId, reviews)
// } else {
//     res.render('guest-album-page', album, userId, reviews)
// }



}))














































router.post("/search/results", csrfProtection, asyncHandler(async(req,res,next) => {
  // const value = document.querySelector('#query').value
  const {SearchName} = req.body
  const {userId} = req.session.auth;
  // console.log(SearchName)
  let searchArray = SearchName.split(' ')
  let searchFilters = []
  const albumResults = await db.Album.findAll()
    albumResults.map(album => {
    searchArray.map(filtered => {
   if (album.name.toLowerCase().includes(filtered.toLowerCase())) {
     searchFilters.push(album)
   }

    })


  })


  // console.log( 'FILTERED PUSH =========',newArr)

  // const filteredResults = albumResults.name.includes(SearchName)
  if (req.session.auth) {

    res.render('search-results', {
      title: 'search-results',
      errors: [],
      csrfToken: req.csrfToken(),
      searchFilters,
      userId
    })
  } else {
    res.render('guest-search-results', {
      title: 'Search-Results',
      errors: [],
      csrfToken: req.csrfToken(),
      searchFilters
    })
  }
}))





module.exports = router;
