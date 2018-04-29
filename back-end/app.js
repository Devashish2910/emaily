const express = require('express');
const app = express();
//const mongoose = require('./database/connection');

require('./routes/routes')(app);

module.exports = app;
