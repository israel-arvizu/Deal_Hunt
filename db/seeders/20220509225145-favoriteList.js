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
      {
        albumId: 1,
        userId: 3,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 5,
        userId: 3,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 2,
        userId: 1,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 3,
        userId: 1,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 7,
        userId: 1,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 12,
        userId: 1,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 15,
        userId: 1,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 10,
        userId: 4,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 6,
        userId: 4,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 1,
        userId: 4,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 2,
        userId: 4,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 9,
        userId: 4,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 10,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 1,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 4,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 5,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 9,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 8,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 12,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },
      {
        albumId: 3,
        userId: 14,
        createdAt: '2019-04-12',
        updatedAt: '2019-04-12'
      },


    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('FavoriteLists', null, {});

  }
};
