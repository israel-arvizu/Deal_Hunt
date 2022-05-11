'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('FavoriteLists', [
        {
        albumId: 2,
        userId: 3,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
        },
        {
          albumId: 3,
          userId: 3,
          createdAt: '2019-04-12',
          updatedAt: '2019-04-12'
        },
        {
          albumId: 4,
          userId: 3,
          createdAt: '2019-04-12',
          updatedAt: '2019-04-12'
        },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('FavoriteLists', null, {});

  }
};
