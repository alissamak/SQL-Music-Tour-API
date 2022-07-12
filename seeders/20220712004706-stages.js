'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [{
      stage_name: 'Stage 1',
    },{
      stage_name: 'Stage 2',
    },{
      stage_name: 'Stage 3',
    }])
  },

  async down (queryInterface, Sequelize) {
    
  }
};
