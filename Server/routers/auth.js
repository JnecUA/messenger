const router = require('express').Router();
const mongoose = require("mongoose");
const userScheme = require('../models/user')
const User = mongoose.model("User", userScheme);
router.post('/register', (req,res) => {
    res.json({
        'status': 200
    })
})

router.post('/auth', (req,res) => {
    res.json({
        'status': 200
    })
})

module.exports = router;