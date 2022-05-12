var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler, clickId } = require('./utils');
const db = require('../db/models');

/* GET home page. */
router.get('/', asyncHandler(async(req, res, next)=> {

  const albums = await db.Album.findAll({
    order: [['rating', 'DESC']],
    limit: 10
    })

  if(req.session.auth){
    const { userId } = req.session.auth; // ALLOWS THE BUTTON 'PROFILE' TO WORK AND TAKE YOU TO THAT USER'S PROFILE PAGE

    res.render('home-logged-in', {title: 'Home', albums, userId});
  }else
    res.render('home-guest', {title: 'Home', albums});
}));


router.get('/albums', asyncHandler(async (req, res) =>{
  const albums = await db.Album.findAll();
  if(req.session.auth)
    res.render('albums', {title: 'Albums', albums})

  res.render('albums-guest', {title: 'Albums', albums})
}));

router.get('/about', (req, res) => {
  res.render('about', {Title: 'About'})
});


module.exports = router;
