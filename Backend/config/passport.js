const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new GoogleStrategy({
    clientID:"1000930394573-7if7r4ms670qggrdk55m6e7nq2o90chs.apps.googleusercontent.com",

    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Use the profile info (mainly profile id) to check if the user is registered in your db
    // If yes, select the user and pass him to the done callback
    // If not, create the user in your db and pass the user to the done callback
    return done(null, profile);
  }
  ));
};
