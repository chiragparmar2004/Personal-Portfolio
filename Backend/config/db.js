import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected successfully on " + db.connection.host);
  } catch (error) {
    console.error(`Error in DB : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
