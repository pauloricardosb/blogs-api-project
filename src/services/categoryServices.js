const { Category } = require('../models');

const categoryPost = async (name) => {
  const newCategory = await Category.create({ name });
  return { newCategory };
};

const getCategory = async () => {
  const category = await Category.findAll();
  return category;
};
module.exports = {
  categoryPost,
  getCategory,
};