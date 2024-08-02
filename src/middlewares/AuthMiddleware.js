import jwt from "jsonwebtoken"
import "dotenv"

const seceret_Key = process.env.seceretKey;

export const authenticateJwt = async(req,res,next) => {
    const token = req.header("Authorization")?.split(" ")[1];   //here we extracting token
    console.log("access tokn", token);

    if(!token) return res.status(400).json("access denied no token provided!");
    try {
        const decodeToken = jwt.verify(token,seceret_Key); //it will decode the token and then give user detial
        req.user = decodeToken;//Ye line decoded data ko req.user ke andar assign kar deti hai. Iska matlab hai ki ab se request cycle ke dauraan, ham req.user ko access karke user ki information (jaise userId, email, etc.) use kar sakte ho.
        next();

    } catch (error) {
        res.status(403).send("invalied token!");
    }


}
authenticateJwt()