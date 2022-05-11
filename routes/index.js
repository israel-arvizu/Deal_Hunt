var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
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


module.exports = router;
