const jwt = require('jsonwebtoken');
const { User } = require("../models/Users.model");
const JWT_SECRET = process.env.JWT_SECRET

/**
 * Middleware to verify user authentication.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {Error} - If no user token is present in request cookies.
 * @throws {Error} - If user is not found in the database.
 */
const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;

    if (!token) {
      throw new Error("No User Token");
    }

    const { _id, firstName } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(_id);

    if (!user) {
      throw new Error("No User Found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized", message: error.message });
  }
};

module.exports = { userAuth };
