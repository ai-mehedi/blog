var express = require('express');
const signupvalidator = require('../validator/authvalidator')
var router = express.Router();
let {
    signupget,
    signuppost,
    loginget,
    loginpost,
    logout } = require('../controllers/authcontroller')




router.get('/signup', signupget);
router.post('/signup', signupvalidator, signuppost);
router.get('/login', loginget);
router.post('/login', loginpost);
router.get('/logout', logout);




router
module.exports = router;
