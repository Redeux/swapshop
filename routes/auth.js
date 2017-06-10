const authController = require('../contollers/authController');

module.exports = (app) => {
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
};
