// server/config/passport.js

const GOOGLE_CLIENT_ID = "1000930394573-7if7r4ms670qggrdk55m6e7nq2o90chs.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

// passportConfig.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/User/googleAuth');

passport.use(
  new GoogleStrategy(
    {
      clientID: 'GOOGLE_CLIENT_ID',
      clientSecret: 'GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:5173/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
