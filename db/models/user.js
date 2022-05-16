'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
     type: DataTypes.STRING(150),
     allowNull: false,
    },
    lastName: {
     type: DataTypes.STRING(150),
     allowNull: false,
    },
    email: {
     type: DataTypes.STRING(355),
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
    User.belongsToMany(models.FavoriteList, {
      through: 'FavoriteList',
      foreignKey: 'userId',
      otherKey: 'albumId'})
    User.hasMany(models.Review, { foreignKey: 'userId' })

  };
  return User;
};
