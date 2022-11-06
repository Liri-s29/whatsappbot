const chatModel = require("../models/chat-model");
const addUser = require("./add-user");

module.exports = async function getAllMessages() {
	try {
		const chats = await chatModel.find();
		const messages = [];
		chats.forEach((chat) => {
			chat.messages.forEach((message) => {
				messages.push({
					...message._doc,
					wa_id: chat.wa_id,
					wa_name: chat.wa_name,
				});
			});
		});
		return messages;
	} catch (error) {
		console.log(error);
	}
};
