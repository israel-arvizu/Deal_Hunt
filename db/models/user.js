'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
     type: DataTypes.STRING(50),
     allowNull: false,
    },
    lastName: {
     type: DataTypes.STRING(50),
     allowNull: false,
    },
    email: {
     type: DataTypes.STRING(255),
     allowNull: false,
     unique: true
    },
    hashedPassword: {
     type: DataTypes.STRING.BINARY,
     allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.FavoriteList, { foreignKey: 'userId' })
    User.hasMany(models.Review, { foreignKey: 'userId' })
    User.hasMany(models.Comment, { foreignKey: 'userId' })

  };
  return User;
};
