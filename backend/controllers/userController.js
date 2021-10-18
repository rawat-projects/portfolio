const User = require("../models/user");
const Aboutme = require("../models/about");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// add user details
exports.postUserDetails = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    user: user,
  });
};

exports.getAbout = catchAsyncErrors(async (req, res, next) => {
  // const user = await User.findById(req.userId);
  // const data = req.body;
  // await Aboutme.create(data);

  res.status(200).send({
    success: true,
    user: "sandeep rawat",
  });
});

exports.postAbout = catchAsyncErrors(async (req, res, next) => {
  await Aboutme.create(req.body);

  res.status(200).send({
    success: true,
    message: "data updated successfully",
  });
});

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const data = {
    ...req.body,
    profileImage: process.env.BACKEND_URL + "/" + req.file.filename,
  };
  await User.findByIdAndUpdate(req.user[0]._id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(201).send({
    success: true,
    message: "data updated successfully",
  });
});
