const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const multer = require("multer");

dotenv.config({ path: "./config/config.env" });

const upload = multer();
const app = express();
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

app.use("/", (req, res, next) => {
  res.send("<h1>hello from backend</h1>");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}

module.exports = app;
