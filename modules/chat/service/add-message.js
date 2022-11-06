const chatModel = require("../models/chat-model");
const addUser = require("./add-user");

module.exports = async function addMessage(req) {
	try {
		const contactData = await addUser(req);
		const messageData = req.body.entry[0].changes[0].value.messages[0];

		if (contactData.new == true) {
			const chatData = {
				wa_id: contactData.wa_id,
				wa_name: contactData.wa_name,
				messages: [
					{
						from_me: false,
						timeStamp: messageData.timestamp,
						media: type == "text" ? false : true,
						message: messageData.body,
					},
				],
			};
			const newChat = new chatModel(chatData);
			await newChat.save();
			return { new: true, ...chatData };
		} else {
			const chat = await chatModel.findOne({ wa_id: contactData.wa_id });
			chat.messages.push({
				from_me: false,
				timeStamp: messageData.timestamp,
				media: type == "text" ? false : true,
				message: messageData.body,
			});
			await chat.save();
			return { new: false, ...chat };
		}
	} catch (error) {
		console.log(error);
	}
};

// object: "whatsapp_business_account",
// 			entry: [
// 				{
// 					id: "102331902684132",
// 					changes: [
// 						{
// 							value: {
// 								messaging_product: "whatsapp",
// 								metadata: { display_phone_number: "918667368604", phone_number_id: "100327752889755" },
// 								contacts: [{ profile: { name: "Srihari S" }, wa_id: "919080921951" }],
// 								messages: [
// 									{
// 										from: "919080921951",
// 										id: "wamid.HBgMOTE5MDgwOTIxOTUxFQIAEhggNjJDNjlBOTM2NTM0RjYyM0U5N0MyMzRDNjkzMEUwRDgA",
// 										timestamp: "1667720270",
// 										text: { body: "Hi" },
// 										type: "text",
// 									},
// 								],
// 							},
// 							field: "messages",
// 						},
// 					],
// 				},
// 			],
