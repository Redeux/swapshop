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
    imageLink: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
          Item.belongsTo(models.User, models.Category, {
            foreignKey: {
              allowNull: false,
            },
          });
        },
      },
    });
  return Item;
};
