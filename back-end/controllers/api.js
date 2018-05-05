const express = require('express');
const router = express.Router();
const credits = require('./credits');
const surveys = require('./surveys');
const requireAuthentication = require('./../middlewares/requireAuthentication');


// Logout- api/logout
router.get('/logout', requireAuthentication, (req, res) => {
    req.logout();
    res.redirect("/");
});

// User Details- api/user
router.get('/user', (req, res) => {
    res.send(req.user);
});

// credits related routes- api/credits
router.use('/credits', requireAuthentication, credits);

// surveys related routes- api/surveys
router.use('/surveys', requireAuthentication, surveys);

module.exports = router;