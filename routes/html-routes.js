const path = require('path');

// these are some initial html routes that we had talked about on Monday
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/main-page.html'));
  });
  app.get('/signup', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/signup.html'));
  });
  app.get('/user', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/user.html'));
  });
  app.get('/user-item', (req, res) => {
    res.sendFile(path.join(_dirname, '../views/user-item.html'));
  });
};
