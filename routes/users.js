var express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult} = require('express-validator');
const db = require('../db/models');
const bcrypt = require('./bcrypt')

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
    // console.log('-----------' , 'entered Post')
    const {
        firstName,
        lastName,
        email,
        hashedPassword
    } = req.body
    const hashPass = await bcrypt.generatePass(hashedPassword)
    // console.log(hashPass)

    const user = db.User.build({
        firstName,
        lastName,
        email,
        hashedPassword: hashPass
    })

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        await user.save();
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


module.exports = router;
