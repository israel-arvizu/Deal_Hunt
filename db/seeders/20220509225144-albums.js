'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Albums', [
        {
          name: "Call Me If You Get Lost",
          artist: "Tyler, the Creator",
          releaseDate: '2021-06-25',
          songList: "SIR BAUDELAIRE%CORSO%LEMONDHEAD%WUSYANAME%LUMBERJACK%HOT WIND BLOWS%MASSA%RUNITUP",
          likeCount: 34,
          rating: 4.7,
          url: "../../images/tyler.jpg",
          createdAt: '2020-10-11',
          updatedAt: '2020-10-11'

        },
        {
          name: "Planet Her",
          artist: "Doja Cat",
          releaseDate: '2021-06-25',
          songList: "Women%Naked%Payday%Get Into It%Need to Know%I Dont Do Drugs%Love to Dream%You Right%Been Like This",
          likeCount: 27,
          rating: 3.9,
          url: "../../images/doja-cat.jpg",
          createdAt: '2020-02-11',
          updatedAt: '2020-02-11'

        },
        {
          name: "Donda",
          artist: "Kanye West",
          releaseDate: '2021-09-29',
          songList: "Donda Chant(Ft.Styleena Johnson)%Jail (Ft.JAY-Z)%God Breathed (Ft. Vory)%Off The Grid%Hurricane (Ft. Lil Baby)",
          likeCount: 43,
          rating: 3.6,
          url: "../../images/kanye-west.jpg",
          createdAt: '2020-02-11',
          updatedAt: '2020-02-11'
        },
        {
          name: "Happier Than Ever",
          artist: "Billie Eillish",
          releaseDate: '2021-07-30',
          songList: "Getting Older%I Didnt Change My Number%Billie Bossa Nova%My Future%Oxytocin%GoldWing%Lost Cause",
          likeCount: 35,
          rating: 4.8,
          url: "../../images/billie-eillish.jpg",
          createdAt: '2020-06-11',
          updatedAt: '2020-06-11'
        },
        {
          name: "Sour",
          artist: "Olivia Rodrigo",
          releaseDate: '2021-04-21',
          songList: "Brutal%Traitor%Driver License%Deja Vu%Good 4 U%happier%Favorite Crime",
          likeCount: 17,
          rating: 4.2,
          url: "../../images/olivia-rodrigo.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Jubilee",
          artist: "Japanese Breakfast",
          releaseDate: '2021-04-20',
          songList: "Paprika%Be Sweet%Kokomo, IN%Slide Tackle%Posing in Bondage%Sit",
          likeCount: 22,
          rating: 5.0,
          url: "../../images/japanese-breakfast.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Heaux Tales",
          artist: "Jazmine Sullivan",
          releaseDate: '2021-01-08',
          songList: "Bodies (intro)%Antoinette's Tale%Ari's Tale%Put It Down%Donna's Tale%Price Tags",
          likeCount: 25,
          rating: 4.7,
          createdAt: '2020-08-11',
          url: "../../images/jazmine-sullivan.jpg",
          updatedAt: '2020-08-11'
        },
        {
          name: "Ignorance",
          artist: "The Weather Station",
          releaseDate: '2021-02-05',
          songList: "Robber%Atlantic%Tried To Tell You%Parking Lot%Loss%Separated",
          likeCount: 12,
          rating: 3.9,
          url: "../../images/weather.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Valentine",
          artist: "Snail Mail",
          releaseDate: '2021-11-05',
          songList: "Valentine%Ben Franklin%Headlock%Light Blue%Madonna%Glory",
          likeCount: 9,
          rating: 4.2,
          url: "../../images/snail-mail.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "To Hell with It",
          artist: "PinkPantheress",
          releaseDate: '2021-10-15',
          songList: "Pain%I Must Apologise%Last Valentines%Passion%Just For Me%Passion",
          likeCount: 7,
          rating: 4.8,
          url: "../../images/pink-pantheress.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Little Oblivions",
          artist: "Julien Baker",
          releaseDate: '2021-10-15',
          songList: "Hardline%Heatwave%Faith Healer%Relative Fiction%Crying Wolf%Bloodshot",
          likeCount: 17,
          rating: 3.8,
          url: "../../images/julien-baker.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "30",
          artist: "Adele",
          releaseDate: '2021-11-19',
          songList: "Strangers By Nature%Easy On Me%My Little Love%Cry Your Heart Out%Oh My God",
          likeCount: 35,
          rating: 4.8,
          url: "../../images/adele.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Sling",
          artist: "Clairo",
          releaseDate: '2021-07-16',
          songList: "Bambi%Amoeba%Partridge%Zinnias%Blouse%Wade",
          likeCount: 23,
          rating: 4.0,
          url: "../../images/clairo.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Certified Lover Boy",
          artist: "Drake",
          releaseDate: '2021-09-03',
          songList: "Champagne Poetry%Papi's Home%Girls Want Girls%In The Bible%Love All%Fair Trade",
          likeCount: 30,
          rating: 4.3,
          url: "../../images/drake.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Blue Banisters",
          artist: "Lana Del Rey",
          releaseDate: '2021-10-22',
          songList: "Text Book%Blue Banisters%Arcdia%Black Bathing Suit%Beautiful%Violets for Roses",
          likeCount: 25,
          rating: 3.5,
          url: "../../images/lana.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Albums', null, {});

  }
};
