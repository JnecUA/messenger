const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    messages: {
        type: Object
    },
    users: {
        type: Object
        
    }
});

module.exports = messageSchema;