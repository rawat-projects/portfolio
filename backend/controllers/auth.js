const User = require("../models/user");
const bcrypt = require("bcryptjs");
const multer = require("multer");
var jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const os = require("os");
const path = require("path");

exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const oldUser = await User.findOne({ username: username });
  if (!oldUser) {
    return res.send({
      message: "User not found",
      isAuthenticated: false,
    });
  }

  const isMatch = await bcrypt.compare(password, oldUser.password);

  if (!isMatch) {
    return res.send({
      message: "credentials not match",
      isAuthenticated: false,
    });
  }

  const token = await oldUser.generateAuthToken();
  await res.cookie("jwttoken", token, {
    expires: new Date(Date.now() + 3600000),
    httpOnly: true,
  });

  req.session.isLoggedIn = true;
  req.session.user = oldUser;
  return req.session.save((err) => {
    return res.send({
      message: "User login successfully",
      isAuthenticated: true,
    });
  });
};

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};

exports.islogin = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.jwttoken;
  if (!token) {
    return next(new ErrorHandler("Login first to access this resource.", 401));
  }

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

  const rootUser = await User.find({ _id: verifyToken._id });
  req.user = rootUser;

  await res.send({
    success: true,
    user: rootUser,
  });
});

exports.signup = async (req, res, next) => {
  console.log("signupbody", req.body);
  try {
    const hostname = os.hostname();
    const username = req.body.username;
    const password = req.body.password;
    const profileImage = req.file;
    if (!profileImage) {
      return res.send({
        message: "Please select a valid file",
        isAuthenticated: false,
      });
    } else {
      console.log("profile image", profileImage);
      const filename = process.env.BACKEND_URL + "/" + profileImage.filename;
      const oldUser = await User.findOne({
        username: username,
      });

      if (oldUser) {
        res.send({
          message: "Username already exists",
          isAuthenticated: false,
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 12);

        await User.create({
          username: username,
          password: hashedPassword,
          profileImage: filename,
        });

        await res.send({
          message: "user signup successfully",
          isAuthenticated: true,
        });
      }
    }
  } catch (err) {
    res.send(err);
  }
};

exports.loadUser = catchAsyncErrors(async (req, res, next) => {
  const data = await User.findOne({
    _id: "6143874220fe394202c4906d",
  });

  res.send({
    user: data,
    isAuthenticated1: req.session.isLoggedIn,
  });
});
