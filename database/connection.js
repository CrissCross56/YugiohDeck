import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27/yugioh-api"

//this is for Model.findByIdAndUpdate method, specifically so that {new : true} is default
mongoose.set("returnOriginal", false)

mongoose
    .connect(MONGODB_URI)
    .catch((error) => 
        console.log("connecting to MongoDB: ", error.message)
);

mongoose.connection.on("disconnected", ()=> console.log(chalk.bold("Disconnected from MongoDB!")))

mongoose.connection.on("error", (error) => console.error(chalk.red(`MongoDB Connection Error: ${error}`)));

export default mongoose.connection;