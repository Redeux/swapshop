const User = require('./users.js');

module.exports = function (sequelize, DataTypes) {
  const Item = sequelize.define('Item', {
    itemName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      //allow all characters
    },
    description: {
      type: DataTypes.TEXT(255),
      allowNull: false,
      //allow all characters
    },
    category: {
      // foreign keys from categories table
    },
    imageLink: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    owner: {
      type: DataTypes.INTEGER,
      // foreign keys from users table
      references: {
        model: User,
        key: 'id',
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    for_swap: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    for_sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
    {
      classMethods: {
        associate(models) {
          Item.belongsTo(models.User, {
            foreignKey: {
              allowNull: false,
            },
          });
        },
      },
    });
  return Item;
};
