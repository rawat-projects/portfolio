const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
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
  name: {
    type: String,
  },
  subHeading: {
    type: String,
  },
  email: {
    type: String,
  },
  aboutUser: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("User", userSchema);
