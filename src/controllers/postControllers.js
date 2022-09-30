const postServices = require('../services/postServices');

const getPosts = async (_req, res) => {
  const result = await postServices.getPosts();
  return res.status(200).json(result);
};

module.exports = { getPosts };