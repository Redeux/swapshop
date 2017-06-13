const db = require('../models/');

module.exports = (app) => {
  app.get('/user/:user/item', (req, res) => {
    console.log("hello")
    db.Item.findAll({
      where: {
        UserId: req.params.user
      }
    }).then((dbItem) => {
      var hbsObject = {
        item: dbItem
      }
      res.render('user-item', hbsObject);
    });
  });
  // app.get('/user/:item', (req, res) => {
  //   db.Item.findOne({
  //     where: {
  //       id: req.params.item
  //     },
  //     include: [db.User]
  //   }).then((dbItem) => {
  //     res.redirect('/user-item');
  //   })
  // });
  app.post('/item/create', (req, res) => {
    db.Item.create({
      itemName: req.body.itemName,
      description: req.body.description,
      imageLink: req.body.imageLink,
      active: req.body.active,
      for_swap: req.body.for_swap,
      for_sale: req.body.for_sale,
      value: req.body.value,
      public: req.body.public

    }).then((dbItem) => {
      res.redirect('user');
    });
  });
  // app.put('/item/update', (req, res) => {
  //   db.Item.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //   }).then((dbItem) => {
  //     res.redirect('/user-item');
  //   });
  // });
  // app.put('/item/delete', (req, res) => {
  //   db.Item.destroy(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then((dbItem) => {
  //       res.redirect('/user-item');
  //     });
  // });
};
