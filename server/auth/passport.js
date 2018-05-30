const passport = require("passport");
const { User } = require("../db/models");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const googleConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
};

const strategy = new GoogleStrategy(
  googleConfig,
  (token, refreshToken, profile, done) => {
    const googleId = profile.id;
    const email = profile.emails[0].value;
    const name = profile.displayName;

    User.findOne({ where: { googleId } })
      .then(user => {
        if (!user) {
          User.create({ googleId, email, name }).then(newUser => {
            done(null, newUser);
          });
        } else {
          done(null, user);
        }
      })
      .catch(done);
  }
);

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

passport.use(strategy);

module.exports = passport;
