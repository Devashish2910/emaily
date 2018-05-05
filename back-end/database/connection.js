// load key
const {mongoURI, localMongoConnection} = require('./../config/key');
// load mongoose
const mongoose = require('mongoose');

// set Promises because mongoose not support the promises
mongoose.Promise = global.Promise;

// set database according recipients the environment
const environment = process.env.NODE_ENV;

if(environment === 'production') {
    mongoose.connect(mongoURI);
} else {
    mongoose.connect(localMongoConnection);
}

// export
module.exports = mongoose;