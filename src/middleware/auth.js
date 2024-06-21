const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  const token = req.body.token;
  const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = user.id;
  if (!token) {
    return next(
      res.json({
        status: "401",
        message: "Debe loguearse para utilizar esta función.",
      })
    );
  }
  await next();
};

exports.isSeller = async (req, res, next) => {
  const { body_token } = req.cookies;
  req.body = jwt.verify(body_token, process.env.JWT_SECRET_KEY);
  if (!body_token) {
    return next(
      res.json({
        status: "401",
        message: "Debe loguearse para utilizar esta recurso.",
      })
    );
  }
 await next();
};

exports.isAdmin = (roles) => {
  return (req, res, next) => {
  const token = req.body.token;
  const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (user.role !== roles) {
      return next(
        res.json({
          status: "401",
          message: `Como ${user.role} no puedes acceder a este recurso!`,
        })
      );
    }
    next();
  };
};