'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     const Categories = await queryInterface.createTable('categories', { 
      
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER
      },

    name: {
      allowNull: false,
      type: Sequelize.STRING
    }
  });
  return Categories;
},

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('categories');
  }
};
