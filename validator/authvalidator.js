
let { body } = require('express-validator')
let User = require('../models/User')




let signupvalidator = [
    body('sname')
        .isLength({ min: 2, max: 15 })
        .withMessage('username must be 2 or 15 char').trim(),
    body('semail')
        .normalizeEmail()
        .isEmail().withMessage('Please Provide Valid Email')
        .custom(async semail => {
            let useremail = await User.findOne({ email: semail })
            if (useremail) {
                return Promise.reject('Email Is already used!')
            }
        }),
    body('spassword')
        .isLength({ min: 5 }).withMessage('your Password must be 5 char')

]



module.exports = signupvalidator