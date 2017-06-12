const path = require('path');

// these are some initial html routes that we had talked about on Monday
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/index.hbs'));
  });
  app.get('/signup', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/signup.hbs'));
  });
  app.get('/user', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/user.hbs'));
  });
  app.get('/user-item', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/user-item.hbs'));
  });
};
