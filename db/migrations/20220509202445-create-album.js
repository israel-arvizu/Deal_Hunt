'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      artist: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      songList: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      likeCount: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.NUMERIC(2, 1)
      },
      url: {
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Albums');
  }
};
