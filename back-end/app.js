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

// Set up for front-end
if (process.env.NODE_ENV === 'production') {
    // send back main js/css file
    app.use(express.static('../front-end/build'));

    // return routes from index.html routes from react
    const path = require('path');
    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, '../front-end', 'build', 'index.html'));
    });
}

require('./routes/routes')(app);

module.exports = app;
