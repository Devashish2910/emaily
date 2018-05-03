const mongoose = require('./../connection');
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    gender: {
        type: String
    },
    credits: {
        type: Number,
        default: 5
    }
});

const users = mongoose.model('users', userSchema);
