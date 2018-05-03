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

module.exports = app;
