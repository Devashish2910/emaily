const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require("./../config/key");

// initalize strategy for Google oAuth2.0
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);
        }
    )
);



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