'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteList = sequelize.define('FavoriteList', {
    id: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  FavoriteList.associate = function(models) {
    // associations can be defined here
  };
  return FavoriteList;
};