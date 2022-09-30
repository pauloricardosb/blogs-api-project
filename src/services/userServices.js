const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const userPost = async ({ email, password, displayName }) => {
    await User.create({ email, password, displayName });

    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };

    const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
    return token;
};

const getUsers = async () => {
    const response = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return response;
};

const getById = async (id) => {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
    console.log(user);
  
    if (!user) {
      return {
        error: {
          message: 'User does not exist',
          type: 'notFound',
        },
      };
    }
  
    return { user };
  };

module.exports = {
    userPost,
    getUsers,
    getById,
};