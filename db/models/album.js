'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    artist: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
    songList: DataTypes.STRING,
    likeCount: DataTypes.INTEGER,
    rating: DataTypes.NUMERIC
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};
