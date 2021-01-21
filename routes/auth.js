var express = require('express');
const signupvalidator = require('../validator/authvalidator')



var router = express.Router();
let {
    signupget,
    signuppost,
    loginget,
    loginpost,
    logout } = require('../controllers/authcontroller')


let { body } = require('express-validator')

let loginpvalidator = [
    body('lemail')
        .isLength({ min: 2, max: 15 })
        .withMessage('Email Must notbe empty').trim(),
    body('lpassword')
        .isLength({ min: 2, max: 15 })
        .withMessage('Password Must notbe empty')]


router.get('/signup', signupget);
router.post('/signup', signupvalidator, signuppost);
router.get('/login', loginget);
router.post('/login', loginpvalidator, loginpost);
router.get('/logout', logout);




router
module.exports = router;
