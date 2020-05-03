'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.ENUM('admin', 'tutor', 'student'),
      allowNull: false
    }
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.User, {foreignKey: 'role_id'})
  };
  return Role;
};