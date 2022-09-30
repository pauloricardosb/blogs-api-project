'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = await queryInterface.createTable('posts_categories', { 
      
      post_id: {
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },

      category_id: {
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        type: Sequelize.INTEGER
      }
  });
  return PostsCategories;  
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};