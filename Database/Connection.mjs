import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@learnmongo.6pho3we.mongodb.net/`;
export const connect = async () => {
	try {
		await mongoose.connect(Url);
		console.log("Succesfully connected to database");
	} catch (e) {
		console.log(e.message);
	}
};
