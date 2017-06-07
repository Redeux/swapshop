let User = require('./users.js');

module.exports = function (sequelize, DataTypes) {
  const SwapTransaction = sequelize.define('SwapTransaction', {
    requester: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      }
    },
    requestee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      }
    },
    requesteeAck: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pending',
      //add other options (fields?): accepted, complete, declined, canceled
    }
  });
  return SwapTransaction;
}