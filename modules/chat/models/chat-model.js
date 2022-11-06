const mongoose = require("mongoose");

// {
// 	user: true,
// 	timeStamp: ,
// 	media: false,
//     message: HI,
// }

const messageSchema = new mongoose.Schema({
	from_me: { type: Boolean, required: true },
	timeStamp: { type: String },
	media: { type: Boolean },
	message: { type: String },
});

const chatSchema = new mongoose.Schema({
	wa_id: { type: String, unique: true, required: true },
	wa_name: { type: String },
	messages: [messageSchema],
});

module.exports = mongoose.model("chat", chatSchema);
