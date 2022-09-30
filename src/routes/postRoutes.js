const express = require('express');
const postController = require('../controllers/postControllers');
const { tokenAuth } = require('../middlewares/tokenValidations');

const post = express.Router();

post.get('/', tokenAuth, postController.getPosts);

module.exports = post;