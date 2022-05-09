'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteList = sequelize.define('FavoriteList', {
    albumId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    userId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
  }, {});
  FavoriteList.associate = function(models) {
    // associations can be defined here
  };
  return FavoriteList;
};
