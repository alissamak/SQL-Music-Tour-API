'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      name: 'FireFly',
      date: '2022-01-17',
      start_time: '2022-01-17T04:33:12.000Z',
      end_time: '2022-01-17T05:33:12.000Z'
    }])
  },

  async down (queryInterface, Sequelize) {
    
  }
};
