const db = require('../models/');

module.exports = (app) => {
  app.get('/user/:userId/items', (req, res) => {
    db.Item.findAll({
      where: {
        UserId: req.params.userId
      }
    }).then((dbItems) => {
      var hbsObject = {
        items: dbItems
      }
      res.render('user-items', hbsObject);
    });
  });
  app.get('/user/:item', (req, res) => {
    db.Item.findOne({
      where: {
        id: req.params.item
      }
    }).then((dbItem) => {
      res.render('user-item');
    })
  });
  app.post('/item/create', (req, res) => {
    db.Item.create({
      itemName: req.body.itemName,
      description: req.body.description,
      imageLink: req.body.imageLink,
      active: req.body.active,
      for_swap: req.body.for_swap,
      for_sale: req.body.for_sale,
      value: req.body.value,
      public: req.body.public,
      UserId: req.body.UserId

    }).then((dbItem) => {
      res.redirect('/user/' + req.body.UserId + '/items');
    });
  });
  app.get('/user/:userId/trade-items', (req, res) => {
    db.Item.findAll({
      where: {
        UserId: {
          $ne: req.params.userId
        },
      },
    }).then((tradeItems) => {
      db.Item.findAll({
      where: {
        UserId: req.params.userId
      },
    }).then((userItems) => {
      var hbsObject = {
        tradeItems: tradeItems,
        userItems: userItems,
      }
      res.render('items', hbsObject);
    })
    });
  });
  app.put('/item/update', (req, res) => {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
    }).then((dbItem) => {
      res.redirect('/user-item');
    });
  });
  app.put('/item/delete', (req, res) => {
    db.Item.destroy(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then((dbItem) => {
        res.redirect('/user-item');
      });
  });

  app.put('/trade', (req,res) => {
    // console.log(req.body);
    // would need trade confirmation here

    db.Item.findOne({
      where: {
        id: req.body.TradeItemId
      }
    }).then((tradeItem) => {

      var tradeeId = tradeItem.UserId;
      console.log(req.body.UserId, req.body.UserItemId)
      db.Item.update({
      UserId: req.body.UserId
      },
      {
        where: {
          id: req.body.TradeItemId
        }
      }).then(() => {
        db.Item.update({
          UserId: tradeeId
          },
          {
            where: {
              id: req.body.UserItemId
            }
        })
      })

    })



  })



};
