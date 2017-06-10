module.exports = function (sequelize, DataTypes) {
  const SwapTransaction = sequelize.define('SwapTransaction', {
    requester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    requestee: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    },
  },
    {
      classMethods: {
        associate(models) {
          SwapTransaction.hasMany(models.SwapItems, {
            foreignKey: {
              allowNull: false,
            },
          });
        },
      },
    });
  return SwapTransaction;
}