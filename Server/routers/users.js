const router = require('express').Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.post('/users/:id', async (req,res) => {
    const user = await User.findById(req.params.id);
    res.send(user)
})

router.put('/users/:id', async (req, res) => {
    console.log(req.body)
})


module.exports = router;