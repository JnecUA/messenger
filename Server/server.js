const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./routers/auth');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routers/users')
require('dotenv').config();

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
}))

app.use(cookieParser());

app.use(bodyParser.json());

app.use(cors());

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('DB connected successful'));

app.use('/api/users', authRouter);
app.use('/api', usersRouter);

app.listen(5000, () => {
    console.log('Server start successful');
});