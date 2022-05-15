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
          url: "/tyler.jpg",
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
          url: "/doja-cat.jpg",
          createdAt: '2020-02-11',
          updatedAt: '2020-02-11'

        },
        {
          name: "Donda",
          artist: "Kanye West",
          releaseDate: '2021-09-29',
          songList: "Donda Chant%Jail%God Breathed%Off The Grid%Hurricane",
          likeCount: 43,
          rating: 3.6,
          url: "/kanye-west.jpg",
          createdAt: '2020-02-11',
          updatedAt: '2020-02-11'
        },
        {
          name: "Happier Than Ever",
          artist: "Billie Eillish",
          releaseDate: '2021-07-30',
          songList: "Getting Older%Billie Bossa Nova%My Future%Oxytocin%GoldWing%Lost Cause",
          likeCount: 35,
          rating: 4.8,
          url: "/billie-eillish.jpg",
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
          url: "/olivia-rodrigo.jpg",
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
          url: "/japanese-breakfast.jpg",
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
          url: "/jazmine-sullivan.jpg",
          updatedAt: '2020-08-11'
        },
        {
          name: "Ignorance",
          artist: "The Weather Station",
          releaseDate: '2021-02-05',
          songList: "Robber%Atlantic%Tried To Tell You%Parking Lot%Loss%Separated",
          likeCount: 12,
          rating: 3.9,
          url: "/weather.jpg",
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
          url: "/snail-mail.jpg",
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
          url: "/pink-pantheress.jpg",
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
          url: "/julien-baker.jpg",
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
          url: "/adele.jpg",
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
          url: "/clairo.jpg",
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
          url: "/drake.jpg",
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
          url: "/lana.jpg",
          createdAt: '2020-08-11',
          updatedAt: '2020-08-11'
        },
        {
          name: "Best Hit AKG",
          artist: "Asian Kung-Fu Generation",
          releaseDate: '2012-01-18',
          songList: "Haruka Kanata%Mirai no Kakera%Understand%Kimi to Iu Hana%Rewrite%Kimi no Machi Made",
          likeCount: 38,
          rating: 4.9,
          url: "/Best_Hit_AKG.jpg",
          createdAt: '2012-10-18',
          updatedAt: '2020-10-18'

        },
        {
          name: "From Under The Cork Tree",
          artist: "Fall Out Boy",
          releaseDate: '2005-05-03',
          songList: "Our Lawyer Made Us Change the Name of This Song So We Wouldn't Get Sued%Of All the Gin Joints in All the World%Dance, Dance",
          likeCount: 38,
          rating: 4.9,
          url:"/Fallout-Boy.jpg",
          createdAt: '2020-6-18',
          updatedAt: '2020-10-18'

        },
        {
          name: "Stone Flower",
          artist: "Antônio Carlos Jobim",
          releaseDate: '1970-03-03',
          songList: "Tereza My Love%Children's Games%Choro%Brazil%Stone Flower%Amparo%Andorinha",
          likeCount: 41,
          rating: 4.9,
          url: "/Stone-Flower.jpg",
          createdAt: '2012-09-18',
          updatedAt: '2020-09-18'

        },
        {
            name: "Songs About Jane",
            artist: "Maroon 5",
            releaseDate: '2002-06-25',
            songList: "Harder to Breathe%This Love%Shiver%She Will Be Loved%Tangled%The Sun",
            likeCount: 68,
            rating: 5.0,
            url: "/Songs-About-Jane.jpg",
            createdAt: '2012-11-18',
            updatedAt: '2020-11-18'

          }


      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Albums', null, {});

  }
};
