const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	wa_id: { type: String, unique: true, required: true },
	wa_name: { type: String },
});

module.exports = mongoose.model("user", userSchema);
