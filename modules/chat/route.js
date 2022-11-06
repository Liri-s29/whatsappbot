const express = require("express");
const router = express.Router();
const { addMessageController } = require("./controller");

router.post("/add-message", addMessageController);

module.exports = router;
