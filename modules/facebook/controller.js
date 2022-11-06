var token = process.env.TOKEN || "token";
const addMessageService = require("../chat/service/add-message");

const facebookVerifyController = (req, res) => {
	if (req.query["hub.mode"] == "subscribe" && req.query["hub.verify_token"] == token) {
		res.send(req.query["hub.challenge"]);
	} else {
		res.sendStatus(400);
	}
};

const facebookReceiveMessageController = async (req, res) => {
	if (!req.isXHubValid()) {
		console.log("Warning - request header X-Hub-Signature not present or invalid");
		res.sendStatus(401);
		return;
	}

	console.log("request header X-Hub-Signature validated");
	res.sendStatus(200);
	try {
		const message = await addMessageService(req);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { facebookVerifyController, facebookReceiveMessageController };
