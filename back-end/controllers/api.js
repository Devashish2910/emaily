const express = require('express');
const router = express.Router();

// Logout- api/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/")
});

// User Details- api/user
router.get('/user', (req, res) => {
    res.send(req.user)
});

module.exports = router;