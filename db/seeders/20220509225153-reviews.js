'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Reviews', [
      { albumId: 1, userId: 3, content: "On their new album, the artist turns their steady gaze towards the wreckage of the last few years and still finds a way to prioritize compassion.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { albumId: 2, userId: 1, content: "This album is, at its heart, an album about the freedom afforded by the open road. But where world' music's stuck on back roads, this album speeds down the interstate.", createdAt: '2012-01-12', updatedAt: '2012-01-12' },
      { albumId: 3, userId: 2, content: "The songwriter's new album interrogates what it means for their self-image to be centered on their art, while grappling with the way capitalist forces threaten to mute its radical possibilities.", createdAt: '2019-05-21', updatedAt: '2019-05-21' },
      { albumId: 4, userId: 4, content: "On the largely wordless everything perfect is already here, the composer lets us experience the world through their ears with field recordings, strings and a little tenderness.", createdAt: '2022-01-17', updatedAt: '2022-01-17' },
      { albumId: 5, userId: 1, content: "Their fifth studio album is ambitious to a fault, delivers introspective meditations over eclectic, but warm, productions.", createdAt: '2020-10-11', updatedAt: '2020-10-11' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
