const express = require('express');
const router = express.Router();
const User = require('./../models/user')

/* Sign up / Log in */
router.post('/sign-up', function(req, res, next) {
    // console.log(req.body)
    User.countDocuments({ email: req.body.email }, function (err, count) {
        console.log('chicken ' + count)
    })
})

router.post('/log-in', function(req, res, next) {
    
})

module.exports = router;
