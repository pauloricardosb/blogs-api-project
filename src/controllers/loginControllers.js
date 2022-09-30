const jwt = require('jsonwebtoken');
const loginServices = require('../services/loginServices');

const { JWT_SECRET } = process.env;

const isBodyValid = (email, password) => email && password;

const login = async (request, response) => {
    try {    
    const { email, password } = request.body;

        if (!isBodyValid(email, password)) {
            return response.status(400).json({ message: 'Some required fields are missing' });
        }

        const userInfo = await loginServices.getUserInfo({ email });

        if (!userInfo || userInfo.password !== password) {
            return response.status(400).json({ message: 'Invalid fields' });
        }

        const jwtConfig = {
            expiresIn: '7d',
            algorithm: 'HS256',
        };

        const token = jwt.sign({ email }, JWT_SECRET, jwtConfig); 

        response.status(200).json({ token });
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
};

module.exports = {
    login,
};