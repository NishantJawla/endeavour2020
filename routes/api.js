//jshint esversion: 8
const router = require('express').Router();


router.route("/signup")
    .post((req, res) => {
        console.log(req.body.username);
        console.log(req.body.pass);
        res.json({
            "status": "200",
            "message": "Signup successful"
        });
    });


module.exports = router;