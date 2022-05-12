'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    albumId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    userId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    content: {
     type: DataTypes.STRING(2500),
     allowNull: false,
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Album, { foreignKey: 'albumId'})
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.hasMany(models.Comment, {foreignKey: 'reviewId'})
  };
  return Review;
};
