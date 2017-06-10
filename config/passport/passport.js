const passport = require('passport');
// Serialize
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user 
passport.deserializeUser((id, done) => {

  User.findById(id).then((user) => {
    if (user) done(null, user.get());
    else done(user.errors, null);
  });
});
