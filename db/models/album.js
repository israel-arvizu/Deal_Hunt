'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: {
     type: DataTypes.STRING(100),
     allowNull: false,
    },
    artist: {
     type: DataTypes.STRING(100),
     allowNull: false,
    },
    artistId: {
     type: DataTypes.INTEGER,
     allowNull: false,
     unique: true,
    },
    releaseDate: {
     type: DataTypes.DATE,
     allowNull: false,
    },
    songList: {
     type: DataTypes.STRING(255),
     allowNull: false,
    },
    likeCount: {
     type: DataTypes.INTEGER,
    },
    rating: {
     type: DataTypes.NUMERIC(2, 1)
    },
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};
