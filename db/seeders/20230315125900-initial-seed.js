const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Alex',
          lastName: 'Jebanovic',
          email: '1@1',
          password: await bcrypt.hash('1', 10),
        },
        {
          firstName: 'Bob',
          lastName: 'Kurwowich',
          email: '2@2',
          password: await bcrypt.hash('2', 10),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          body: 'Hello, Bob! Nice 2 meet u. Howdy?',
          title: 'Greetings',
          userId: 1,
        },
        {
          body: 'I have pancackes. Do u want some?',
          title: 'Pancackes',
          userId: 1,
        },
        {
          body: 'No',
          title: 'No',
          userId: 2,
        },
        {
          body: 'This chat is quite empty',
          title: 'lonely',
          userId: 1,
        },
        {
          body: 'Sure',
          title: '...',
          userId: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
