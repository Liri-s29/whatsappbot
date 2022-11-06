const mongoose = require("mongoose");

// {
// 	user: true,
// 	timeStamp: ,
// 	media: false,
//     message: HI,
// }

const messageSchema = new mongoose.Schema({
	user: { type: Boolean, required: true },
	timeStamp: { type: String },
	media: { type: Boolean },
	message: { type: String },
});

const chatSchema = new mongoose.Schema({
	talksNo: { type: Number, unique: true, required: true },
	youtubeLink: { type: String, require: true },
	titleColored: { type: String, required: true },
	titleWhite: { type: String, require: true },
	anchoredBy: { type: String, require: true },
	transcriptTitle: { type: String, require: true },
	transcriptAnchoredBy: { type: String, require: true },
	blogContent: { type: Array },
	timeStamp: { type: Array },
	wa_id: { type: String, unique: true, required: true },
	wa_name: { type: String },
	messages: [messageSchema],
});

module.exports = mongoose.model("chat", chatSchema);
