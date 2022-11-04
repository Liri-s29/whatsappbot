const express = require("express");
const router = express.Router();

const { facebookVerifyController, facebookReceiveMessageController } = require("./controller");

router.get("/", facebookVerifyController);
router.post("/", facebookReceiveMessageController);

module.exports = router;
