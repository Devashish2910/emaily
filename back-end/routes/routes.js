// Import Controllers
const oAuth = require('./../controllers/oAuth');
const api = require('./../controllers/api');


module.exports = app => {
    // Root
    /*app.get('/', (req, res) => {
        res.send({"message": "Hello, World!"})
    });*/

    // Authentication
    app.use('/auth', oAuth);

    // Common API related routes
    app.use('/api', api);

};