const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require("./config/key");
const bodyParser = require("body-parser");
const app = express();
// Connect to Database
require('./database/connection');

app.use(bodyParser.json())
// Enable Cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/routes')(app);

// Set up for front-end
/*if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    // send back main js/css file
    app.use(express.static(path.join(__dirname, '..front-end/build')));

    // return routes from index.html routes from react
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../front-end', 'build', 'index.html'));
    });
}*/


module.exports = app;
