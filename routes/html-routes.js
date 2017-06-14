const path = require('path');

// these are some initial html routes that we had talked about on Monday
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views/index.hbs'));
  });
  app.get('/signup', (req, res) => {
    res.render(path.join(__dirname, '../views/signup.hbs'));
  });
  app.get('/user/:userId/items/create', (req, res) => {
    res.render(path.join(__dirname, '../views/user.hbs'));
  });
  app.get('/login', (req, res) => {
    res.render(path.join(__dirname, '../views/login.hbs'));
  });
  // app.get('/user/:userId/items', (req, res) => {
  //   res.render(path.join(__dirname, '../views/user-items.hbs'));
  // });
};
