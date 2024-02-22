import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

const Connection = async () => {
    try {
        const URL = process.env.DB_LOCAL_URL;

        if (!URL) {
            throw new Error('DB_LOCAL_URL is not defined in the environment.');
        }

        mongoose.set('strictQuery', false);
        await mongoose.connect(URL);
        console.log("Connected to database succesfully.");
    } catch (error) {
        console.log(error);
    }
};

export default Connection;