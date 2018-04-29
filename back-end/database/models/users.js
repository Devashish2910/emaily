const mongoose = require('./../connection');
const Schema = mongoose.Schema;

const userSchema = new Schema({});

const users = mongoose.model('users', userSchema);

module.exports(users);