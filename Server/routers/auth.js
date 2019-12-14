const router = require('express').Router();
const mongoose = require("mongoose");
const userScheme = require('../models/user');
const bcrypt = require('bcrypt')
const User = mongoose.model("User", userScheme);


router.post('/register', async (req,res) => {
    //VALIDATE
    errors = [];
    if (req.body.email.length < 6) {
        errors.push('Длина поля "Почта" должна быть больше 6 символов')
    }
    if ((req.body.email.split('@')[0] == '') || (req.body.email.split('@')[1]) || (req.body.email.split('.').length == 0)){
        errors.push('Почта не валидна');
    }
    if (req.body.username.length < 6) {
        errors.push('Длина поля "Имя пользователя" должна быть больше 6 символов')
    }
    if (req.body.name.length < 6) {
        errors.push('Длина поля "Имя" должна быть больше 6 символов')
    }
    if (req.body.password.length < 6) {
        errors.push('Длина поля "Пароль" должна быть больше 6 символов')
    }
    if (req.body.password != req.body.pass_confirm) {
        errors.push('Пароли не совпадают');
    }
    const user = new User ({
        email: req.body.email,
        username: req.body.username,
        name: req.body.name,
        password: req.body.password
    });
    const emailExist = await user.findOne({email: req.body.email});
    if (emailExist) {
        errors.push('Почта уже зарестрированна')
    }
    if (errors.length == 0) {
        
    }
    res.json({
        errors: errors
    });
})

router.post('/auth', (req,res) => {

    res.send(req.body)
})

module.exports = router;