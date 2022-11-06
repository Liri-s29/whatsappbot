const addMessageService = require("./service/add-message");

const addMessageController = async (req, res) => {
	try {
		const message = await addMessageService(req);
		res.send({
			status: "success",
			message: "Message added successfully",
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { addMessageController };
