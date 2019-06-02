'use strict';

const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID || '434096090732921',
      clientSecret:
        process.env.FACEBOOK_APP_SECRET || 'c27ff7c2d27e8537197f6dd66b450930'
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

function passportFaceBook(request) {
  return new Promise((resolve, reject) => {
    passport.authenticate('facebook-token', (error, user, info) => {
      if (error) {
        resolve(error);
      }
      resolve(user);
    })(request);
  });
}

module.exports = { passportFaceBook };
