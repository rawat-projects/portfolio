const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectImage: {
    type: String,
    required: [true, "Please upload an image"],
  },
  name: {
    type: String,
    required: [true, "Please enter project name"],
  },
  link: {
    type: String,
    required: [true, "Please enter project link"],
  },
  languages: {
    type: Array,
    required: [true, "Please select languages"],
  },
});

module.exports = mongoose.model("Projects", projectSchema);
