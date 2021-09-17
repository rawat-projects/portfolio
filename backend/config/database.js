const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URL).then(
    () => {
      console.log("database connection succeed");
    },
    (err) => {
      console.log("database connection failed");
    }
  );
};

module.exports = connectDatabase;
