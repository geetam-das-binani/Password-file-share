import mongoose from "mongoose";

export const connect = async (username, password) =>
  mongoose.connect(
    `mongodb+srv://${username}:${password}@learnmongo.6pho3we.mongodb.net/`
  );
