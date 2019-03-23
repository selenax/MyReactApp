const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

//determines which data of user object to store in session: storing id in cookie
//under the hood: req.session.passport.user
passport.serializeUser((user, done) => {
  //user.id is mongo's unique identifier
  done(null, user.id);
});

//take id from cookie and use as cb to retrieve user object from mongodb
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
      callbackURL: '/auth/google/callback'
    },
    // (accessToken, refreshToken, profile, done) => {
    //   console.log(profile.displayName, '👿');
    //   User.findOne({ googleID: profile.id }).then(existingUser => {
    //     if (existingUser) {
    //       done(null, existingUser);
    //     } else {
    //       new User({ googleID: profile.id, name: profile.displayName })
    //         .save()
    //         .then(user => done(null, user));
    //     }
    //   });
    // }
    //refactor promise with async es7
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      //existingUser is the returned resolved promise
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({
          googleID: profile.id,
          name: profile.displayName
        }).save();
        done(null, newUser);
      }
    }
  )
);
