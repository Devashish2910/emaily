const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require("./../config/key");
const mongoose = require("mongoose");
const User = mongoose.model("users");

// serialize
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//deserialize
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
           done(null, user);
        });
});

// strategy for Google oAuth2.0
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({userId: profile.id});
            if (existingUser) {
                // user already exist
                return done(null, existingUser);
            }
            // save as new user
            const new_user = await new User({
                userId: profile.id,
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                gender: profile.gender
            }).save();
            if (new_user) {
                return done(null, new_user);
            }
        }
    )
);

// strategy for Facebook oAuth2.0
passport.use(
    new FacebookStrategy({
            clientID: keys.fbClientID,
            clientSecret: keys.fbClientSecret,
            callbackURL: "https://emaily-deva.herokuapp.com/auth/facebook/callback",
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({userId: profile.id})
                .then(existingUser => {
                    if (existingUser) {
                        // user already exist
                        done(null, existingUser);
                    } else {
                        // save as new user
                        new User({
                            userId: profile.id,
                            first_name: profile.name.givenName,
                            last_name: profile.name.familyName,
                            gender: profile.gender
                        })
                            .save()
                            .then(new_user => {
                                done(null, new_user)
                            });
                    }
                });
        })
);