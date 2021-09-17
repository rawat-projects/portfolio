const User = require("../models/user");

// add user details
exports.postUserDetails = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    user: user,
  });
};
