// Import Controllers
//const DriverController = require('./../controller/DriverController');
//const RootController = require('./../controller/RootController');
const oAuth = require('./../controllers/oAuth');


module.exports = app => {
    // Root
    app.get('/', (req, res) => {
        res.send({"message": "Hello, World!"})
    });

    // Authentication
    app.use('/auth', oAuth)
    // Routes on drivers
    //app.use('/d', DriverController);
};