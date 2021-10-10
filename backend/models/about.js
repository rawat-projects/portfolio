const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subHeading: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
  },
  about: {
    type: String,
  },
});

module.exports = mongoose.model("Aboutme", aboutSchema);
