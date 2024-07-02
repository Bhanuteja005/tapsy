const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileControllers");
const { verifyAccessToken } = require("../middlewares.js");

// Routes beginning with /api/profile
router.get("/", verifyAccessToken, getProfile);
router.get("/:id", verifyAccessToken, (req, res) => {
    const { id } = req.params;
  });
module.exports = router;