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
    message: "Project Created Successfully",
  });
});

exports.getProjects = catchAsyncErrors(async (req, res, next) => {
  const allProjects = await Projects.find();

  res.status(200).send({
    data: allProjects,
  });
});

exports.getSingleProject = catchAsyncErrors(async (req, res, next) => {
  const projectId = req.params.projectId;
  const projectData = await Projects.findOne({ _id: projectId });

  res.status(200).send({
    data: projectData,
  });
});

exports.updateProject = catchAsyncErrors(async (req, res, next) => {
  const { projectImage, name, link, languages, projectId } = req.body;
  const updatedLanguages = languages.split(",");
  const updatedData = {
    projectImage,
    name,
    link,
    languages: updatedLanguages,
  };

  await Projects.findByIdAndUpdate(projectId, updatedData);

  res.status(201).send({
    message: "Project Updated Successfully",
  });
});

exports.deleteProject = catchAsyncErrors(async (req, res, next) => {
  const projectId = req.params.projectId;
  await Projects.findOneAndDelete({
    _id: projectId,
  });

  res.status(200).send({
    success: true,
  });
});
