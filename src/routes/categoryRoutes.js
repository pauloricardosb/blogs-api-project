const express = require('express');
const categoryController = require('../controllers/categoryControllers');
const { tokenAuth } = require('../middlewares/tokenValidations');
const { categoryValidation } = require('../middlewares/categoryValidations');

const category = express.Router();

category.post('/', tokenAuth, categoryValidation, categoryController.categoryPost);
category.get('/', tokenAuth, categoryController.getCategory);

module.exports = category;