const jwt = require('jsonwebtoken');
const { User } = require("../model/user.model.js");
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

/**
 * Middleware to enforce admin role-based access control.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {Error} - If the user in the request is not an admin.
 */
const adminRBAC = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "admin") {
      throw new Error("Unauthorized Admin");
    }
    next();
  }
  catch (error) {
    res.status(402).send({ error: "Unauthorized Admin", message: error.message });
  }
}

/**
 * Middleware to enforce ETM role-based access control.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {Error} - If the user in the request is not an ETM.
 */

const etmRBAC = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "etm") {
      throw new Error("Unauthorized ETM");
    }
    next();
  }
  catch (error) {
    res.status(402).send({ error: "Unauthorized ETM", message: error.message });
  }
}


/**
 * Middleware to enforce EH role-based access control.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {Error} - If the user in the request is not an EH.
 */

const ehRBAC = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "eh") {
      throw new Error("Unauthorized EH");
    }
    next();
  }
  catch (error) {
    res.status(402).send({ error: "Unauthorized EH", message: error.message });
  }
}

/**
 * Middleware to enforce LT role-based access control.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {Error} - If the user in the request is not an LT.
 */
const ltRBAC = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "lt") {
      throw new Error("Unauthorized LT");
    }
    next();
  }
  catch (error) {
    res.status(402).send({ error: "Unauthorized LT", message: error.message });
  }
}

/**
 * Middleware to enforce User role-based access control.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {Error} - If the user in the request is not a User.
 */
const userRBAC = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "user") {
      throw new Error("Unauthorized User");
    }
    next();
  }
  catch (error) {
    res.status(402).send({ error: "Unauthorized User", message: error.message });
  }
}

module.exports = { userAuth, adminRBAC };
