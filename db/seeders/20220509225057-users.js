'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
      {firstName: "Uki", lastName: "Pavlovic", email: "ukiP@yahoo.com", hashedPassword:'$2a$12$rc1Is7YVefwxdR2372bPfOSOAyiffnY1AJ4kGap92VW3Bg0Uv7.LS', createdAt: new Date('2019-04-12'), updatedAt: new Date('2019-04-12')
    },
      {firstName: "Israel", lastName: "Arvizu", email: "IsraelA@yahoo.com", hashedPassword:'$2a$12$QZAttP52TSMQArOa/px2LOsmE7O2l8CQqP7oPMtqOC2e/X1WqA1.O', createdAt: new Date('2019-04-13'), updatedAt: new Date('2019-04-13')
    },
      {firstName: "Augustino", lastName: "Elisaia", email: "AugustinoE@gmail.com", hashedPassword:'$2a$12$ZXGtR3.n8cJabYPxujm2h.ULC7MfPr0lINkk7YbKYwlwpv6eTHx2W', createdAt: new Date('2019-04-14'), updatedAt: new Date('2019-04-14')
    },
      {firstName: "John", lastName: "Hinds", email: "JohnH@yahoo.com", hashedPassword:'$2a$12$bya/tSecjm6cSHmQaDqjne4lgggjXgUboF877BDJIpILFI2f/WDbm', createdAt: new Date('2019-04-15'), updatedAt: new Date('2019-04-15')
    },
      {firstName: "Patrick", lastName: "Mcginn", email: "PatrickM@gmail.com", hashedPassword:'$2a$12$cGwMxJoMyIUoawdKpXlupegG5tN.jrftaVYjeMsysfOTbeBef8XLS', createdAt: new Date('2019-04-18'), updatedAt: new Date('2019-04-18')
  }
   ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
