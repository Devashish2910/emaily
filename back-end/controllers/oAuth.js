const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// initalize strategy for Google oAuth2.0
passport.use(new GoogleStrategy());

// Google Authentication - /auth/google
router.post('/google', (req, res) => {

});

// Export
module.exports = router;