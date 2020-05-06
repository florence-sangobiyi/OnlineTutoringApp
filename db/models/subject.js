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
    Subject.belongsToMany(models.User, {through: 'User_Subjects'})
    Subject.belongsToMany(models.Lesson, {through: 'Lessons_Subjects'})
  };
  return Subject;
};