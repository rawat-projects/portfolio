const express = require("express");
// const dotenv = require("dotenv");
const userRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const multer = require("multer");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errors");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").dotenv.config({ path: "./config/config.env" });
}

const upload = multer();
const app = express();
app.use(cookieParser());

const store = new MongoDBStore({
  uri: process.env.MONGODB_URL,
  collection: "sessions",
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use(userRoutes);
app.use(projectRoutes);

app.use(express.static(path.join(__dirname, "uploads")));

// Middleware to handle errors
app.use(errorMiddleware);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

module.exports = app;
