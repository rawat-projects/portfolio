const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// dotenv.config({ path: "./config/config.env" });

connectDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server started on PORT: ${PORT} in ${process.env.NODE_ENV} mode`
  );
});

// unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  process.exit();
});
