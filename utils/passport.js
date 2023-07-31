require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

passport.use(
    'linkedin',
    new LinkedInStrategy(
        {
            clientID: 'YOUR_LINKEDIN_CLIENT_ID',
            clientSecret: 'YOUR_LINKEDIN_CLIENT_SECRET',
            callbackURL: 'http://localhost:4000/api/users/auth/google/callback',
            scope: ['r_emailaddress', 'r_liteprofile'],
        },
        (accessToken, refreshToken, profile, done) => {
            // Handle the user profile returned by LinkedIn
            // You can save the user to the database or perform any other necessary actions here
            // The profile object contains user information returned by LinkedIn
            // You can access profile properties like profile.id, profile.displayName, profile.emails, etc.
            // Call the done function to complete the authentication process
            done(null, profile);
        }
    )
);

passport.use(
    'google',
    new GoogleStrategy(
        {
            clientID: clientID,
            clientSecret: clientSecret,
            callbackURL: 'http://localhost:4000/api/users/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            // Handle the user profile returned by Google
            // You can save the user to the database or perform any other necessary actions here
            // The profile object contains user information returned by Google
            // You can access profile properties like profile.id, profile.displayName, profile.emails, etc.
            // Call the done function to complete the authentication process
            done(null, profile);
        }
    )
);

module.exports = passport;