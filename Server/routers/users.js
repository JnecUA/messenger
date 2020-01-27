const router = require('express').Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require('bcryptjs')

router.post('/users/:id', async (req,res) => {
    const user = await User.findById(req.params.id);
    res.send(user)
})

router.put('/users/:id', async (req, res) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const errors = [];
    if (req.body.email.length < 6) {
        errors.push('Длина поля "Почта" должна быть больше 6 символов')
    }
    if (reg.test(req.body.email)  == false){
        errors.push('Почта не валидна');
    }
    if (req.body.username.length < 6) {
        errors.push('Длина поля "Имя пользователя" должна быть больше 6 символов');
    }
    
    if (req.body.name.length < 2) {
        errors.push('Длина поля "Имя" должна быть больше 2 символов')
    }
    if (req.body.username.length < 6) {
        errors.push('Длина поля "Фамилия" должна быть больше 2 символов');
    }
    if ((req.body.password.length < 6) && (req.body.password.length !== 0)){
        errors.push('Длина поля "Пароль" должна быть больше 6 символов')
    }
    if (req.body.pass_confirm !== req.body.new_pass) {
        errors.push('Пароли не совпадают');
    }
    const user = await User.findById(req.body.id);
    if (req.body.password.length !== 0){
        if (user.password.length != 0)
        bcrypt.compare(req.body.password, user.password, (err, result) =>  {
            if (result !== true) {
                errors.push('Не верный пароль');
            }
        })
    }
    const emailExist = User.findOne({email: req.body.email})
    if ((emailExist) && (req.body.email === user.email)) {
        errors.push('Пользователь с данной почтой уже зарегестрирован')
    } 
    const usernameExist = await User.findOne({'username': req.body.email})
    if ((usernameExist) && (req.body.username === user.username)) {
        errors.push('Пользователь с данным ником уже зарегестрирован')
    }
    if (errors.length === 0) {
        user.overwrite({
            'email': req.body.email,
            'username': req.body.username,
            'name': req.body.name,
            'lastname': req.body.lastname,
            'password': req.body.password.length !== 0 ? req.body.password : user.password,
        })
        await user.save();
        return res.json({user: user, errors: []})
    }
    return res.json({errors: errors})
    
})


module.exports = router;