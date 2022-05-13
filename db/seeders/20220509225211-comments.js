'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Comments', [
        { userId: 1, reviewId: 1, content: "My comment will probably get lost but whoever reads this.. You got this! Whatever you are going through will get better hang in there", createdAt: '2019-03-12', updatedAt: '2019-04-12' },
        { userId: 4, reviewId: 2, content: "Thanks for this beat☺️🙏💗❤️", createdAt: '2019-02-12', updatedAt: '2019-04-12' },
        { userId: 3, reviewId: 3, content: "I will make it in the music industry 🔥🔥🔥", createdAt: '2019-01-12', updatedAt: '2019-04-12' },
        { userId: 7, reviewId: 4, content: "def snapped on this one! another hit fam🎤📀", createdAt: '2019-05-12', updatedAt: '2019-04-12' },
        { userId: 9, reviewId: 5, content: "Listening to the beat and making lyric is my favourite", createdAt: '2019-06-12', updatedAt: '2019-04-12' },
        { userId: 11, reviewId: 6, content: "Yea got up in the game on some real shit I know they gone feel this cause I spit this real shit i ain't even gonna sign a deal I'm just rapping cause I like how it makes me feel I use to be in love now I'm a thug posted  up in my corner remember I was flipping qtrs got it out that Georgia water showing love because I didn't have a father", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 15, reviewId: 7, content: "God Damn Living Legend Sub To Him Now!! This Is Straight Fire🔥🔥🔥🔥", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 2, reviewId: 8, content: "How u do that so that it is a hit every time? My Guyyy Left u a sub! 🥶🥶🥶", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 7, reviewId: 9, content: "Not here to inflict pain on others I am unapologetic for living the way it matter To my heart everything sits right when i listen to my hunch Got my stepping stone got my stepping stone", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 5, reviewId: 10, content: "In questi anni sono risorto prima mi senrivo morto come se stessi giocando la mia stessa vita all 8 ma ora son cambiato piu deciso che mai a spaccare deciso piu che mai a fatturare deciso piu che mai a flexare", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 2, reviewId: 11, content: "Siamo cartivi ragazzi nei bei quartieri quelli da cui scappavi appena vedevi quelli veri che nn tdadiscono ne subiscono ma si colpiscono e quando lo facciamo ne risenti tu e i tuoi denti", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 1, reviewId: 12, content: "Dios las palabras", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 14, reviewId: 13, content: "Bro.. is it me, or yesterday it was à différent instrumental. Same title, but it seems like its overwritten or something.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 13, reviewId: 14, content: "Don't dwell on the past, it only brings tears. Don't think too much about the future, it only brings fear. Living in the present with a smile on your face like a child will bring you joy. Wish those who read this comment will always be happy and beautiful", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 15, reviewId: 15, content: "I don't want much for my birthday. I just want the person reading this to be healthy, happy and loved. Wishing you a good day!", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 3, reviewId: 16, content: "to anyone who reads this comment: imagine a warm day where you're looking out the window and sipping on tea or coffee, watching the birds fly by and trees and grass dance to the wind. you sit there for hours just letting the day fly by without a worry or fear in mind and your plants reach for the sunlight trying to grow and bloom into something beautiful. and you start to think,' life is good.'", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 8, reviewId: 17, content: "You know, i was haveing the worse day today and came across this music! When i started reading all of y'alls commits, i realized that if all of you have such good hearts, a sunny disposition, and are supportive to people you dont even know, then i need to follow all of you!  My day is better because you all! Thank you for being wonderful!", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 12, reviewId: 18, content: "This makes me so calm when me and my sister fight 💕", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 9, reviewId: 19, content: "I'll be moving to another country in less than a month and now I'm sitting in my room, drawing, watching the sunset while listening to chill lofi music. I'll leave a comment here to remind me of this peaceful and slightly melancholic moment.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 6, reviewId: 20, content: "This music is so brilliant, beautiful, smooth & uplifting! Also, as always, the visual artwork is incredibly detailed and magnificent. Thank you, once again, Chillhop channel. 🌞❤️☺️", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 4, reviewId: 21, content: "need this to be 3 hours longer to get through my side hustle work shift!! Fell in love with this in the first 5 seconds", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 11, reviewId: 22, content: "I play this in my classroom all day, every day. I appreciate you for sharing your gift with us. Please make more like this! :) This keeps my students calm and motivated. I see them bobbing their heads and working all the time. lol", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 14, reviewId: 23, content: "God has definitely been leading me to listen to music without words, says I'm to stimulated from all the tv, news & social media, says I need to relax, neo-soul is my favorite genre of music, kinda reminds me of when I was little hearing Maxwell & Jill Scott playing while my mother cleaned the house 🥰.  Miss those days, everything's so chaotic now. Great talent Fasol 💯💥💥💥", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 7, reviewId: 24, content: "This never gets old to listen to. Gives me a warm nostalgic feeling.. like I’m out driving with my dad and it’s 1999 ❤️ rip", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 6, reviewId: 25, content: "Neo Soul is saved to my playlist!!Depression clinics all around should play this music in their offices...No words just music!🎶", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 10, reviewId: 26, content: "Decided to put on some nice instrumentals as I start to write my book.this truly set the vibe. To God be all the glory for all the talents and gifts he has given us.🙏🏽🙌🏽", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 3, reviewId: 27, content: "Thank you! Such a great mix. Really enjoying this while drinking my green tea and journaling🍵😌💚", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 10, reviewId: 28, content: "It is hard to put my son to sleep, so I found this tracklist and told him a story while playing it and he fell to sleep. Then realizing, I just came up with a great children's book. Thank you so much for this. Amazing🥰🥰🥰💥HAPPY JUNETEENTH!!!!", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 14, reviewId: 29, content: "This is one of the best instrumental mixes that I’ve found on YouTube. I’ve listened to it more times than I could count. You are immensely talented!", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 13, reviewId: 30, content: "A big cup of black coffee in the morning and relaxing, beautiful, calm soul music - not such a bad start to the week, I think 🙂 🎧🎧 🎶 Thank you so much for this! 🙏🙏", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 2, reviewId: 31, content: "Currently painting by number with three of my five children. This music is teaching them how to get in the zone and focus on art. It’s a screen free Sunday for us. It’s working so far! No arguing, communicating, sharing. I’m loving it.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 6, reviewId: 32, content: "I love how everyone is using this music for creativity. That's dope. I use it when I teach massage, and when I massage my personal clients. All time fave! Thanks for blessing us with your talent.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 7, reviewId: 33, content: "I homeschool my boys and every morning around 7:00 am I play your jams. You wouldn't believe how much the vibe changes and they're actually ready to learn by the time I start teaching. Keep them coming I'm a new follower!!", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 4, reviewId: 34, content: "This has been the hardest year of my life... if I didn't have this catalog to meditate on, i don't believe I'd still be here. Thanks and BLESS YOU💫", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 3, reviewId: 3, content: "Working From Home. Just needed some soothing music to cruise me through the afternoon. This was a perfect selection. It's doing it for me.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 1, reviewId: 4, content: "This is so smooth, I'll definitely be playing this while working in my garden, it's so relaxing. I'm sure the neighbors will learn to appreciate it.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 9, reviewId: 5, content: "I am a Social Worker and a critical aspect of my job is to document if I am not in the field. When I came across this music to help increase my focus without words and just jams, I started loving it. I even put my colleague on it too and he likes it a lot. Thank you so much and I listen every day. I have practically remembered the beats.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 8, reviewId: 6, content: "I played this at my grandmothers repast two weeks ago for family and friends and OMG EVERYONE LOVED THIS.  We were eating and bobbing our heads at the same time🙌🏽.", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 6, reviewId: 7, content: "So meditative and therapeutic, I love this 🥰💕💗", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 11, reviewId: 8, content: "Class of 2021!!!! I did it!!! 5 Degrees and a year of this Neo-Soul mix later....Blessings!!!!", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 14, reviewId: 9, content: "A beautiful bubble bath, with a candle burning and this playing has now become my new ritual. Thank you for the upload. 💖", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 12, reviewId: 10, content: "This is giving me musiq soulchild vibes and I'm here for it all day ! 🧡", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { userId: 15, reviewId: 11, content: "Had no idea how much my soul needed this. Thank you❤️", createdAt: '2019-04-12', updatedAt: '2019-04-12' },



    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});

  }
};
