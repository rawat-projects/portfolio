const express = require("express");
const router = express.Router();
const multer = require("multer");
const userControllers = require("../controllers/userController");
const authController = require("../controllers/auth");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/admin/contact", userControllers.postUserDetails);
router.post("/admin/login", authController.login);
router.post(
  "/admin/signup",
  upload.single("profileImage"),
  authController.signup
);
router.post("/admin/logout", authController.logout);

module.exports = router;
