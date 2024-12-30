import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Db_url, {
      dbName: "ChatBotAi",
    });

    console.log("Mongo db connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;