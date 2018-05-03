// Import Controllers
const oAuth = require('./../controllers/oAuth');
const api = require('./../controllers/api');


module.exports = app => {

    // Authentication
    app.use('/auth', oAuth);

    // Common API related routes
    app.use('/api', api);

};