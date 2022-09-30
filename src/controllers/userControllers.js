const userServices = require('../services/userServices');

const userPost = async (request, response) => {
    const { email, password, displayName } = request.body;

    const dbUser = await userServices.userPost({ email, password, displayName });

    return response.status(201).json({ token: dbUser });
};

const getUsers = async (_req, res, next) => {
    try {
      const response = await userServices.getUsers();
  
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const { error, user } = await userServices.getById(id);

  if (error && error.type === 'notFound') {
    const err = new Error(error.message);
    err.status = 404;
    return next(err);
  }

  return res.status(200).json(user);
};

module.exports = {
    userPost,
    getUsers,
    getById,
};
