'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: user => {
        if (user.password)
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      },
      beforeUpdate: user => {
        if (user.changed('password'))
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      }
    }

  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, {
      foreignKey: 'role_id',
      onDelete: 'CASCADE'
    })
    User.belongsToMany(models.Subject, {through: 'User_Subjects'})
    User.hasMany(models.Lesson, {as: 'Student'})
    User.hasMany(models.Lesson, {as: 'Tutor'})
  };
  return User;
};