'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {id: 1, name: 'admin', createdAt: '2020-05-04 12:04:36', updatedAt: '2020-05-04 12:04:36'},
      {id: 2, name: 'tutor', createdAt: '2020-05-04 12:04:36', updatedAt: '2020-05-04 12:04:36'},
      {id: 3, name: 'student', createdAt: '2020-05-04 12:04:36', updatedAt: '2020-05-04 12:04:36'}
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};

