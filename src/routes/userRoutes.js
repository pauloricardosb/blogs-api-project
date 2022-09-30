const express = require('express');
const userControllers = require('../controllers/userControllers');
const { userValidation } = require('../middlewares/userValidations');
const { tokenAuth } = require('../middlewares/tokenValidations');

const user = express.Router();

user.post('/', userValidation, userControllers.userPost);
user.get('/', tokenAuth, userControllers.getUsers);
user.get('/:id', tokenAuth, userControllers.getById);

module.exports = user;