import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export async function connectionDb()
{
    try{
        const mongoUri = process.env.MONGO_URI;
        await mongoose.connect(mongoUri);
        console.log("MongoDB connected");
    }
    catch(error)
    {
        console.log(error);
        throw new Error(error)
    }
}