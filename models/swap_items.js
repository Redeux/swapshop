module.exports = (sequelize, DataTypes) => {
  const SwapItems = sequelize.define('SwapItems', {
    swapItem1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    swapItem2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'Pending',
      //add options of pending and complete
    },
  }, {
    classMethods: {
      associate(models) {
        SwapItems.belongsTo(models.SwapTransaction, {
          foreignKey: {
            allowNull: false,
          },
        });
        // SwapItems.hasMany(models.Item, {
        //   foreignKey: {
        //     allowNull: false,
        //   },
        // });
      },
    },
  });
  return SwapItems;
};
