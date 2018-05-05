const mongoose = require('./../connection');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: {
        type: Boolean,
        default: false
    }
});

module.exports = recipientSchema;