'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    Subject.belongsTo(models.Category, {
      foreignKey: 'category_id',
      onDelete: 'CASCADE'
    })
  };
  return Subject;
};