const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// dotenv.config({ path: "./config/config.env" });

connectDatabase();

app.listen(5000, () => {
  console.log(`Server started at 5000 port`);
});

// unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  process.exit();
});
