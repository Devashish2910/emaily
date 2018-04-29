// load key
const {mLabConnection, localMongoConnection} = require('./../config/key');
// load mongoose
const mongoose = require('mongoose');

// set Promises because mongoose not support the promises
mongoose.Promise = global.Promise;

// set database according to the environment
const environment = process.env.NODE_ENV;

if(environment === 'production') {
    console.log(mLabConnection)
    mongoose.connect(mLabConnection);
} else {
    mongoose.connect(localMongoConnection);
}

// export
module.exports = mongoose;