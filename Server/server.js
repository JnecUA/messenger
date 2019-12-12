const express = require('express');
const app = express();
const http = require('http');
const https = require('https')
const mongoose = require('mongoose');
const authRouter = require('./routers/auth');
const cors = require('cors');
require('dotenv').config();

app.use(cors());

mongoose.connect(process.env.DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('DB connected successful'));

app.get('/', (req,res) => res.send('lol'))

app.use('/api/users', authRouter);

app.listen(5000, () => {
    console.log('Server start successful')
});