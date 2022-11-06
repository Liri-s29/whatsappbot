const UserModel = require("../models/user-model");

module.exports = async function addUser(req) {
	const contactData = req.body.entry[0].changes[0].value.contacts[0];
	try {
		// Check if user exists
		const user = await UserModel.findOne({ wa_id: contactData.wa_id });
		if (!user) {
			const userData = {
				wa_id: contactData.wa_id,
				wa_name: contactData.profile.name,
			};
			const newUser = new UserModel(user);
			await newUser.save();
			// return user data
			return { new: true, ...userData };
		}
		// return user data
		return { new: false, ...user };
	} catch (error) {
		console.log(error);
	}
};
