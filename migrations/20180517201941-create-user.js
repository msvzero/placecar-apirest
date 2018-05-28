'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      photoUrl: {
        field: "photo_url",
        type: Sequelize.STRING(255)
      },
      role: {
        default: 1,
        type: Sequelize.INTEGER(10)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};