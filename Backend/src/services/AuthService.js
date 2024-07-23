import jwt from "jsonwebtoken"
import User from "../models/User.js"
import "dotenv/config"

const seceret_Key = process.env.seceretKey;


export const loginUser = async(userData) => {

    //when user login, then verify there password and generate a token if the credentials are valied.
    const {email,password} = userData
    const user = await User.findOne({email});
    
    if(!(user?.email === email)) throw  Error("please give correct email id!")
    if(!(user?.password === password)) throw  Error("password is wrong");
    
    const payload = {
        userId: user._id,
        email: user.email
    }

    //generate a token
    const token = jwt.sign(payload,seceret_Key,{expiresIn: "1h"});
    if(!token) throw new Error("token can not generated!");
    return token;
}