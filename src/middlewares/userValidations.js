const { User } = require('../models');

const userValidation = async (request, response, next) => {
    const { email, password, displayName } = request.body;

    const reg = /\S+@\S+\.\S+/;

    if (displayName.length < 8) {
        return response
        .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
    }

    if (!reg.test(email)) {
        return response.status(400).json({ message: '"email" must be a valid email' });
    }

    if (password.length < 6) {
        return response
        .status(400).json({ message: '"password" length must be at least 6 characters long' });
    }

    const registeredEmail = await User.findOne({ where: { email } });

    if (registeredEmail) {
        return response.status(409).json({ message: 'User already registered' });
    }

    next();
};

module.exports = {
    userValidation,
};