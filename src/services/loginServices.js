const { User } = require('../models');

const getUserInfo = async ({ email }) => {
    const userInfo = await User.findOne({ where: { email } });

    return userInfo;
};

module.exports = {
    getUserInfo,
};