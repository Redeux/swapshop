const userController = require('./../contollers/userController');


// these are some initial html routes that we had talked about on Monday
module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index.hbs');
  });
  app.get('/signup', (req, res) => {
    res.render('signup.hbs');
  });
  app.get('/user', isLoggedIn, userController.items);
  app.get('/user/items', isLoggedIn, (req, res) => {
    res.redirect('/user');
  });
  app.get('/user/items/create', isLoggedIn, (req, res) => {
    res.render('createItems.hbs');
  });
  app.get('/user/transactions',  isLoggedIn, userController.transactions);
  app.get('/login', (req, res) => {
    res.render('login.hbs');
  });


  function isLoggedIn(req, res, next) {

    req.session.returnTo = req.path;
    if (req.isAuthenticated())
      return next();

    res.redirect('/login');
  }
};