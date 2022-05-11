'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Albums', [
        {
          name: "Call Me If You Get Lost",
          artist: "Tyler, the Creator",
          releaseDate: new Date('2021-06-25'),
          songList: "SIR BAUDELAIRE%CORSO%LEMONDHEAD%WUSYANAME%LUMBERJACK%HOT WIND BLOWS%MASSA%RUNITUP",
          likeCount: 34,
          rating: 4.7,
          createdAt: '2020-10-11',
          updatedAt: '2020-10-11'

        },
        {
          name: "Planet Her",
          artist: "Doja Cat",
          releaseDate: new Date('2021-06-25'),
          songList: "Women%Naked%Payday%Get Into It%Need to Know%I Dont Do Drugs%Love to Dream%You Right%Been Like This",
          likeCount: 27,
          rating: 3.9,
          createdAt: '2020-02-11',
          updatedAt: '2020-02-11'

        },
        {
          name: "Donda",
          artist: "Kanye West",
          releaseDate: new Date('2021-09-29'),
          songList: "Donda Chant(Ft.Styleena Johnson)%Jail (Ft.JAY-Z)%God Breathed (Ft. Vory)%Off The Grid%Hurricane (Ft. Lil Baby)",
          likeCount: 43,
          rating: 3.6,
          createdAt: '2020-02-11',
          updatedAt: '2020-02-11'
        },
        {
          name: "Happier Than Ever",
          artist: "Billie Eillish",
          releaseDate: new Date('2021-07-30'),
          songList: "Getting Older%I Didnt Change My Number%Billie Bossa Nova%My Future%Oxytocin%GoldWing%Lost Cause",
          likeCount: 35,
          rating: 4.8,
          createdAt: '2020-06-11',
          updatedAt: '2020-06-11'
        },
        {
          name: "Sour",
          artist: "Olivia Rodrigo",
          releaseDate: new Date('2021-04-21'),
          songList: "Brutal%Traitor%Driver License%Deja Vu%Good 4 U%happier%Favorite Crime",
          likeCount: 17,
          rating: 4.2,
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Albums', null, {});

  }
};
