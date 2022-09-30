const express = require('express');
const loginController = require('../controllers/loginControllers');

const login = express.Router();

login.post('/', loginController.login);

module.exports = login;