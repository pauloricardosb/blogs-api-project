const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenAuth = async (request, response, next) => {
    const token = request.header('Authorization');

    try {
    if (!token) {
        return response.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(token, JWT_SECRET);
    next();
} catch (err) {
    return response.status(401).json({ message: 'Expired or invalid token', error: err.message });
}
};

module.exports = {
  tokenAuth,
};