const chatModel = require("../models/chat-model");
const addUser = require("./add-user");

module.exports = async function getAllMessages() {
	try {
		const chats = await chatModel.find();
		const messages = [];
		chats.forEach((chat) => {
			chat.messages.forEach((message) => {
				messages.push({
					text: message.text,
				});
			});
		});
		return messages;
	} catch (error) {
		console.log(error);
	}
};
