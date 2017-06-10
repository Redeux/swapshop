module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(15),
      allowNull: false,
      // no spaces
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      //all characters allowed
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING(25),
      allowNull: false,
      is: ['^[a-z]+$', 'i'],
    },
    lastName: {
      type: DataTypes.STRING(25),
      allowNull: false,
      is: ['^[a-z]+$', 'i'],
    },
    streetAddress: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // email verified
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.Item, {
          onDelete: "cascade",
        });
        User.hasMany(models.SwapTransaction, {
          onDelete: "cascade",
        });
      },
    },
  });
  return User;
};