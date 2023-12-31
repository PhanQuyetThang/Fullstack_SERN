'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '0000',
      firstName: 'Quyet Thang',
      lastName: 'Phan',
      address: 'Viet Nam',
      phonenumber: '0123456',
      gender: 1,
      roleId: 'R1',
      positionId: 'P0',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
