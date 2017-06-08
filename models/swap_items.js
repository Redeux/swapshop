let SwapTransaction = require('./swap_transactions.js');
let Item = require('./items.js');

module.exports = function (sequelize, DataTypes) {
  const SwapItems = sequelize.define('SwapItems', {
    swapTransaction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SwapTransaction,
        key: 'id',
      }
    },
    swapItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Item,
        key: 'id',
      }
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'Pending',
      //add options of pending and complete
    }
  });
  return SwapItems;
}