const express = require('express');
const router = express.Router();

// Import Strategy
require("./../services/passport")
const passport = require('passport');


// Google Authentication - /auth/google
router.get(
    '/google',
    passport.authenticate('google',{
        scope: ['profile', 'email']
    })
);

// Callback URL - /auth/google/callback
router.get('/google/callback', passport.authenticate('google'));

// Export
module.exports = router;