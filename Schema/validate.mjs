import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
	path: {
		type: String,
		required: true,
	},
	originalName: {
		type: String,
		required: true,
	},
	password: String,
	downloadCount: {
		type: Number,
		require: true,
		default: 0,
	},
});

export const file = mongoose.model("myfiledata", dataSchema);
