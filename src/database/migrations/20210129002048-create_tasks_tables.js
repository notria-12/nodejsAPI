'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true,

      },
      title: Sequelize.STRING,
      title: Sequelize.STRING,
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};
