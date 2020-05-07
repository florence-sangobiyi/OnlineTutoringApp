'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    name: {
      allowNull: false,
       type: DataTypes.STRING
    }
  }, {});
  Lesson.associate = function(models) {
    // associations can be defined here
    Lesson.belongsToMany(models.Subject, {through: 'Lessons_Subjects'})
    Lesson.belongsTo(models.User, {as: 'Student', foreignKey: 'student_id'})
    Lesson.belongsTo(models.User, {as: 'Tutor', foreignKey: 'tutor_id'})
    
  };
  return Lesson;
};
