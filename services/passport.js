const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const {emails} = profile;

      let userEmail = "invalid";

      //1.  begin search for valid uci email
      emails.forEach(email => {
        if (email.value.endsWith("@uci.edu"))
            userEmail = email.value;
      });

      //2. search through model "board-member" and reserve User for general population
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      // create new user
      const user = await new User({ 
        googleId: profile.id,
        name: profile.displayName,
        email: userEmail
      }).save();
      
      done(null, user);
    }
  )
);
