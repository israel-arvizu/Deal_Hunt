'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    reviewId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    content: {
     type: DataTypes.STRING(1000),
     allowNull: false,
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {foreignKey: 'userId'})
    Comment.belongsTo(models.Review, {foreignKey: 'reviewId'})
  };
  return Comment;
};
