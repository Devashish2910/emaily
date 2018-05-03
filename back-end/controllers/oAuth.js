const express = require('express');
const router = express.Router();

// Import Strategy
require("./../database/models/users");
require("./../services/passport");
const passport = require('passport');


// Google Authentication - /auth/google
router.get(
    '/google',
    passport.authenticate('google',{
        scope: ['profile', 'email']
    })
);

// Callback URL - /auth/google/callback
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
});

// facebook Authentication - /auth/facebook
router.get(
    '/facebook',
    passport.authenticate('facebook', {
        scope: ['public_profile', 'email']
    })
);
// Callback URL - /auth/facebook/callback
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect : '/'}));


// Export
module.exports = router;