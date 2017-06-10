const authController = require('../contollers/authController');
const passport = require('passport');

module.exports = (app) => {
  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
  }));

  app.get('/logout', authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/signin');
  }
};
