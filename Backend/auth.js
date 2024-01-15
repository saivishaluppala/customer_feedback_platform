const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth configuration
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback', // Adjust callback URL
  }, (accessToken, refreshToken, profile, done) => {
    // Successful authentication
    // Store user information in the session
    req.session.user = profile;
    done(null, profile);
  })
);

// Login route
app.get('/auth/google', passport.authenticate('google'));

// Callback route
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  // Successful login, redirect to homepage or protected area
  res.redirect('/');
});

// Export the app
module.exports = app;
