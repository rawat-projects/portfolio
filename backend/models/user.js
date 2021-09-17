const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter username"],
  },
  password: {
    type: String,
    required: [true, "please enter password"],
  },
  phone: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
