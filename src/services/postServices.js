const { BlogPost, Category, User } = require('../models');

const getPosts = async () => {
  const attributes = [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ];

  const posts = await BlogPost.findAll({
    include: attributes,
  });

  return posts;
};

module.exports = { getPosts };