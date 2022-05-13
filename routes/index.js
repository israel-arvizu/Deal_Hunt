var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler, clickId } = require('./utils');
const { check, validationResult} = require('express-validator');
const db = require('../db/models');
const { sequelize } = require('../db/models');
const { Op } = require("sequelize");

/* GET home page. */
router.get('/', asyncHandler(async(req, res, next)=> {

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
    res.render('home-logged-in', {title: 'Home', albums, userId ,loggedInUser, songs, favListQuery});
  }else
    res.render('home-guest', {title: 'Home', albums});
}));


router.get('/albums', asyncHandler(async (req, res) =>{

  const albums = await db.Album.findAll();

  if(req.session.auth){
    const { userId } = req.session.auth
    res.render('albums', {title: 'Albums', albums, userId})
  }

  res.render('albums-guest', {title: 'Albums', albums})
}));

router.get('/about', (req, res) => {
  if(req.session.auth){
    const { userId } = req.session.auth
    res.render('about', {Title: 'About', userId})
  }

  res.render('guest-about', {Title: 'About'})
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

  const albumId = req.params.id;
  const album = await db.Album.findByPk(albumId);
  const songListArr = album.songList.split("%");
  const reviews = await db.Review.findAll({
    where: {
      albumId
    },
    order: [['createdAt', 'DESC']]
    })

  if (req.session.auth) {
    const { userId } = req.session.auth;
    const newReview = db.Review.build();

    res.render('album-page', {
      title: `MusicHunt: ${album.name}`,
      album,
      userId,
      newReview,
      songListArr,
      reviews,
      csrfToken: req.csrfToken(),
      errors: [],
    })

  } else {
    res.render('guest-album-page', {title: `MusicHunt: ${album.name}`, album, songListArr, reviews})
}

}))

const newReviewValidator = [
  check('content')
  .exists({ checkFalsy: true })
  .withMessage('Please provide the content of the review')
  .isLength({ max: 2500 })
  .withMessage('Content must not be more than 2500 characters long'),
]

router.post('/albums/:id(\\d+)', csrfProtection, newReviewValidator, asyncHandler(async(req, res, next) => {
  console.log("ENTERED POST")
  const albumId = req.params.id;
  const { userId } = req.session.auth;
  const album = await db.Album.findByPk(albumId)
  const songListArr = album.songList.split("%")
  const reviews = await db.Review.findAll({
    where: {
      albumId
    },
    order: [['createdAt', 'ASC']]
    })
if(reviews) {console.log("successful reviews")}
  const {
    content
  } = req.body;
  const newReview = db.Review.build({
    albumId,
    userId,
    content
  })

  const validatorErrors = validationResult(req);
console.log(validatorErrors.isEmpty())
  if(validatorErrors.isEmpty()){
    await newReview.save();
    res.redirect(`/albums/${albumId}`)


}else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('album-page', {
      title: `MusicHunt: ${album.name}`,
      album,
      userId,
      newReview,
      songListArr,
      reviews,
      csrfToken: req.csrfToken(),
      errors,
    })
}
}))

router.put('/reviews/remove/:id(\\d+)', asyncHandler(async(req, res) => {
  const {userId} = req.session.auth;
  console.log('USER ID: ', userId)
  const reviewId = req.params.id;
  console.log('REVIEW ID: ', reviewId)
  const review = await db.Review.findByPk(reviewId);
  console.log('REVIEW ', review)

  if(userId){
    review.destroy();
    console.log('Destroyed Review')
    res.json({
      message: 'Destroyed'
    })

  }else{
    res.json({
      message: 'Failed'
    })
  }
}))



module.exports = router;
