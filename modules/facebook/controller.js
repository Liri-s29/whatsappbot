const facebookVerifyController = (req, res) => {
	if (req.query["hub.mode"] == "subscribe" && req.query["hub.verify_token"] == token) {
		res.send(req.query["hub.challenge"]);
	} else {
		res.sendStatus(400);
	}
};

const facebookReceiveMessageController = (req, res) => {
	if (!req.isXHubValid()) {
		console.log("Warning - request header X-Hub-Signature not present or invalid");
		res.sendStatus(401);
		return;
	}

	console.log("request header X-Hub-Signature validated");
	// Process the Facebook updates here
	received_updates.unshift(req.body);
	res.sendStatus(200);
};

module.exports = { facebookVerifyController, facebookReceiveMessageController };
