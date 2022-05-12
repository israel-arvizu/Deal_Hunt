'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      { firstName: "Uki", lastName: "Pavlovic", email: "ukiP@yahoo.com", hashedPassword: '$2a$12$rc1Is7YVefwxdR2372bPfOSOAyiffnY1AJ4kGap92VW3Bg0Uv7.LS', createdAt: ('2019-04-12'), updatedAt: ('2019-04-12') },
      { firstName: "Israel", lastName: "Arvizu", email: "IsraelA@yahoo.com", hashedPassword: '$2a$12$QZAttP52TSMQArOa/px2LOsmE7O2l8CQqP7oPMtqOC2e/X1WqA1.O', createdAt: ('2019-04-13'), updatedAt: ('2019-04-13') },
      { firstName: "Augustino", lastName: "Elisaia", email: "AugustinoE@gmail.com", hashedPassword: '$2a$12$ZXGtR3.n8cJabYPxujm2h.ULC7MfPr0lINkk7YbKYwlwpv6eTHx2W', createdAt: ('2019-04-14'), updatedAt: ('2019-04-14') },
      { firstName: "John", lastName: "Hinds", email: "JohnH@yahoo.com", hashedPassword: '$2a$12$bya/tSecjm6cSHmQaDqjne4lgggjXgUboF877BDJIpILFI2f/WDbm', createdAt: ('2019-04-15'), updatedAt: ('2019-04-15') },
      { firstName: "Patrick", lastName: "Mcginn", email: "PatrickM@gmail.com", hashedPassword: '$2a$12$cGwMxJoMyIUoawdKpXlupegG5tN.jrftaVYjeMsysfOTbeBef8XLS', createdAt: ('2019-04-18'), updatedAt: ('2019-04-18') },
      { firstName: "Hala", lastName: "Ljungman", email: "ali020587@ebarg.net", hashedPassword: '$2a$12$rc1Is7YVefwxdR2372bPfOSOAyiffnY1AJ4kGap92VW3Bg0Uv7.LS', createdAt: ('2017-04-25'), updatedAt: ('2017-04-25') },
      { firstName: "İlker", lastName: "Koskinen", email: "karmaissniping@dmxs8.com", hashedPassword: '$2a$12$G.8KurwC.EIn.WgwDWdihuDBJBZjm/G7VOwyGgjjRtGq8Cf3C/HHe', createdAt: ('2018-04-29'), updatedAt: ('2018-04-29') },
      { firstName: "Juanne", lastName: "Tinker", email: "ukiP@yahoo.com", hashedPassword: '$2a$12$7rSyXuuPfI67DiewQSb2SeeKMQmOommwdZalXnsm6cp3M6fKJpjpi', createdAt: ('2018-06-03'), updatedAt: ('2018-06-03') },
      { firstName: "Kasi", lastName: "Hopkins", email: "ukiP@yahoo.com", hashedPassword: '$2a$12$rc1Is7YVefwxdR2372bPfOSOAyiffnY1AJ4kGap92VW3Bg0Uv7.LS', createdAt: ('2019-04-12'), updatedAt: ('2019-04-12') },
      { firstName: "Libitina", lastName: "Bisset", email: "jimmyx86@pickuplanet.com", hashedPassword: '$2a$12$1J7PdgXqbn67CPrjITNBv.OiNNSGPaVTOeUNmb2DQN0jYYcPuHwSu.LS', createdAt: ('2018-10-01'), updatedAt: ('2018-10-01') },
      { firstName: "Esther", lastName: "Debenham", email: "kaixx@bomukic.com", hashedPassword: '$2a$12$XZ0K39KTKWeJGMy497pUSurCjLlQ41VhQqLjPGWkYQpuQuxiFyKvy', createdAt: ('2018-10-20'), updatedAt: ('2018-10-20') },
      { firstName: "Manjula", lastName: "Kimball", email: "videninaleksei@filevino.com", hashedPassword: '$2a$12$rc1Is7YVefwxdR2372bPfOSOAyiffnY1AJ4kGap92VW3Bg0Uv7.LS', createdAt: ('2019-01-01'), updatedAt: ('2019-01-01') },
      { firstName: "Anita", lastName: "Honda", email: "jessicabrf@nalsci.com", hashedPassword: '$2a$12$Op9T6FcNK/iT0FbAQTFQ0.b6P7qV189Vs00IVOjcIJ56qf0HBhMsm', createdAt: ('2019-07-16'), updatedAt: ('2019-07-16') },
      { firstName: "Marcelle", lastName: "Lind", email: "attardaient@burgas.vip", hashedPassword: '$2a$12$xg.K3X0RNEC4GzDtT.vJ7OHblAjW2hTjOZD23VapFfjk6Ibun2g0S', createdAt: ('2020-03-28'), updatedAt: ('2020-03-28') },
      { firstName: "Krysia", lastName: "Tordai", email: "santadeluxe@hasevo.com", hashedPassword: '$2a$12$rc1Is7YVefwxdR2372bPfOSOAyiffnY1AJ4kGap92VW3Bg0Uv7.LS', createdAt: ('2022-10-31'), updatedAt: ('2022-10-31') },
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
