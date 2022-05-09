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
     type: DataTypes.STRING(350),
     allowNull: false,
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};
