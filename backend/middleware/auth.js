const jwt = require("jsonwebtoken");
const User = require("../models/user");
const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  console.log("working");
  const token = req.cookies.jwttoken;
  if (!token) {
    return next(new ErrorHandler("Login first to access this resource.", 401));
  }

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

  const rootUser = await User.find({
    _id: verifyToken._id,
  });

  // req.token = token;
  req.user = rootUser;
  req.userId = rootUser._id;

  next();
});
