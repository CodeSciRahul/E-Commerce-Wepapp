import jwt from "jsonwebtoken"
import User from "../models/User.js"
import "dotenv/config"
import bcrypt from "bcrypt"

const secret_Key = process.env.seceretKey;


export const loginUser = async(userData) => {

    const {email,password} = userData
    const user = await User.findOne({email});
    
    if(!(user?.email === email)) throw  Error("please give correct email id!")

   const ispasswordmatch = await bcrypt.compare(password, user.password)
   if(!ispasswordmatch) throw new Error("password mismatch");
    //when user login, then verify there password and generate a token if the credentials are valied.
    const payload = {
        user_id: user._id,
        email: user.email,
    }

    const token =jwt.sign(payload,secret_Key,{expiresIn: "1h"});
    console.log(token);
    if(!token) throw new Error("token can not created");
    return token;

}