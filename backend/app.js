const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const multer = require("multer");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errors");
const path = require("path");

dotenv.config({ path: "./config/config.env" });

const upload = multer();
const app = express();
app.use(cookieParser());

const store = new MongoDBStore({
  uri: process.env.MONGODB_URL,
  collection: "sessions",
});

app.use(express.static(path.join(__dirname, "uploads")));

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

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
