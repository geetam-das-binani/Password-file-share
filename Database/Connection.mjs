import mongoose from "mongoose";



export const connect = async (username,password) => {
	try {
		await mongoose.connect(`mongodb+srv://${username}:${password}@learnmongo.6pho3we.mongodb.net/`);
		console.log("Succesfully connected to database");
	} catch (e) {
		console.log(e.message);
	}
};
