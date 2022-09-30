'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const BlogPosts = await queryInterface.createTable('blog_posts', {
    
    id: { 
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER
    }, 
    
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },

    content: {
      allowNull: false,
      type: Sequelize.STRING
    },

    user_id: {
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id',
      },
      type: Sequelize.INTEGER,
    },
    published: 'TIMESTAMP',
    updated: 'TIMESTAMP'
  });
  return BlogPosts;
},

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
