module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    categoryName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    parent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })
  return Category;
}