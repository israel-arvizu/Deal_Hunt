var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler, clickId } = require('./utils');
const { check, validationResult} = require('express-validator');
const db = require('../db/models');

/* GET home page. */
router.get('/', asyncHandler(async(req, res, next)=> {
  const albums = await db.Album.findAll({
    order: [['rating', 'DESC']],
    limit: 10
  })
  res.render('home', {title: 'Home', albums});
}));


router.get('/albums', asyncHandler(async (req, res) =>{
  const albums = await db.Album.findAll();

  res.render('albums', {title: 'Albums', albums})
}));

router.get('/about', (req, res) => {
  res.render('about', {Title: 'About'})
});

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
    title: "Settings"

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
      csrfToken: req.csrfToken()
  })

}
}))
module.exports = router;
