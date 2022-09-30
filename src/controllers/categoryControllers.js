const categoriesService = require('../services/categoryServices');

const categoryPost = async (req, res) => {
  const { name } = req.body;

  const { newCategory } = await categoriesService.categoryPost(name);

  return res.status(201).json(newCategory);
};

const getCategory = async (req, res) => {
  const category = await categoriesService.getCategory();
  return res.status(200).json(category);
};

module.exports = {
  categoryPost,
  getCategory,
};