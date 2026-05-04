const express = require("express");
const router = express.Router();
const { sendMessage, getMessages, getSharedMedia } = require("../controllers/messageController");
const protect = require("../middleware/authMiddleware");

router.post("/send", protect, sendMessage);
router.get("/:userId", protect, getMessages);
router.get("/media/:userId", protect, getSharedMedia);

module.exports = router;