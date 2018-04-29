// Import Controllers
//const DriverController = require('./../controller/DriverController');
//const RootController = require('./../controller/RootController');


module.exports = app => {
    // Root Route
    app.get('/', (req, res) => {
        res.send({"message": "Hello, World!"})
    });

    // Routes on drivers
    //app.use('/d', DriverController);
};