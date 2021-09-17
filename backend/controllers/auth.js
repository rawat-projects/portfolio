const User = require("../models/user");
const bcrypt = require("bcryptjs");
const multer = require("multer");

exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("username", username);
  console.log("password", password);

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

  req.session.isLoggedIn = true;
  req.session.user = oldUser;
  return req.session.save((err) => {
    console.log(req.session);
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

exports.signup = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const profileImage = req.file;
    if (!profileImage) {
      return res.send({
        message: "Please select a valid file",
        isAuthenticated: false,
      });
    } else {
      const filepath = profileImage.path;
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
          profileImage: filepath,
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
