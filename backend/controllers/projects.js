const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Projects = require("../models/projects");

exports.newProject = catchAsyncErrors(async (req, res, next) => {
  const data = {
    projectImage: process.env.BACKEND_URL + "/" + req.file.filename,
    ...req.body,
  };

  await Projects.create(data);

  res.send({
    success: true,
    message: "New Project Created",
  });
});

exports.getProjects = catchAsyncErrors(async (req, res, next) => {
  const allProjects = await Projects.find();

  res.status(200).send({
    data: allProjects,
  });
});
