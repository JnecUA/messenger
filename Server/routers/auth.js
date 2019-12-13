const router = require('express').Router();
const mongoose = require("mongoose");
const userScheme = require('../models/user');
const User = mongoose.model("User", userScheme);



router.post('/register', (req,res) => {
    res.json({
        'errors': ['ERROR']
    })
})

router.post('/auth', (req,res) => {

    res.send(req.body)
})

module.exports = router;