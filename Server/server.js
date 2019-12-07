const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./routers/auth');
const cors = require('cors');


app.use(cors())

app.use('/api/users', authRouter);

app.listen(5000, () => {
    console.log('Server start successful')
});