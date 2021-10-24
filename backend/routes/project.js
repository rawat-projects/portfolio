const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

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

router.get("/projects", getProjects);
router.get("/project/:projectId", getSingleProject);
router.put("/project/update", upload.single("projectImage"), updateProject);
router.delete("/project/delete/:projectId", deleteProject);

module.exports = router;
