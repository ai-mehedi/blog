const bcrypt = require('bcrypt');
const User = require('../models/User')
const { validationResult } = require('express-validator')


exports.signupget = (req, res, next) => {


    res.render('./auth/signup', { error: {}, value: {} });
}






exports.signuppost = async (req, res, next) => {

    const { sname, semail, spassword } = req.body

    //error handelstart
    errorformatter = (error) => error.msg
    let errors = validationResult(req).formatWith(errorformatter)

    if (!errors.isEmpty()) {
        return res.render('./auth/signup',
            {
                error: errors.mapped(),
                value: {
                    sname, semail, spassword
                }
            });
    }



    //error handel end




    await User.findOne({ email: semail })
        .then(user => {
            if (user) {
                return res.status(304).json({
                    msg: 'User already exist !'
                });
            }

        })

    try {
        const hash = await bcrypt.hashSync(spassword, 10);

        const _user = new User({
            name: sname,
            email: semail,
            password: hash,

        })
        const created = await _user.save()
        res.render('./auth/signup', { error: {}, value: {} });

    } catch (e) {
        next(e)
    }

}

exports.loginget = (req, res, next) => {

    console.log(req.session.isLoggedin, req.session._user)

    res.render('./auth/login', { error: {} });
}



exports.loginpost = async (req, res, next) => {
    const { lemail, lpassword } = req.body

    errorformatter = (error) => error.msg
    let errors = validationResult(req).formatWith(errorformatter)

    if (!errors.isEmpty()) {
        return res.render('./auth/login',
            {
                error: errors.mapped(),

            });
    }




    try {


        let luser = await User.findOne({ email: lemail })
            .then(luser => {


                if (!luser) {
                    return res.json({
                        msg: 'Invalid email !'
                    });
                }

                bcrypt.compare(lpassword, luser.password)
                    .then(pass => {
                        if (!pass) {
                            return res.json({
                                msg: "invalid password"
                            });
                        }

                    });


            })
        req.session.isLoggedin = true
        req.session.User = luser
        res.render('./auth/login', { error: {} });


    } catch (e) {
        console.log(e)
    }


    res.render('./auth/login');



}

exports.logout = (req, res, next) => {

}
