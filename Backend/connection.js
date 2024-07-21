import mongoose from "mongoose";
import express from "express"


const app = express();
const port = 5000;

export const MongodbConnect = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/ecommerce",{
        })
        console.log("mongodb Connected Successfully")
        app.listen(port , () => {
            console.log("https://localhost:",port)
        })
    } catch (error) {
        console.log("Could not Connect", error)
    }
}