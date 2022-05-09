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
     type: DataTypes.STRING(350),
     allowNull: false,
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Album, { foreignKey: 'albumId'})
    Review.hasMany(models.Comment, {foreignKey: 'reviewId'})
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Review;
};
