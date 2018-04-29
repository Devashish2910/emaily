const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/emaily');

mongoose.connection
    .once('open', () => {
        console.log('Connected With Database..');
    })
    .on('error', (err) => {
        console.warn(err);
    });

module.exports = mongoose;