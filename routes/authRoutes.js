const express = require("express");
const router = express.Router();
const { signup, login, updateProfile, deleteAccount } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.put("/update", protect, updateProfile);
router.delete("/delete", protect, deleteAccount);

module.exports = router;