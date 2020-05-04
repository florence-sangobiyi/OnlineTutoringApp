'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.ENUM('primary', 'jss', 'sss'),
      allowNull: false
    }
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};