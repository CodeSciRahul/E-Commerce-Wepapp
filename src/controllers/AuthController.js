import {loginUser} from "../services/AuthService.js"

export const loginController = async(req,res) => {
    try {
        const token = await loginUser(req.body)
        res.status(200).send({
            token,
            message: "logged in successfully"
        })
    } catch (error) {
        if(error?.message === "password mismatch") {
            return res.status(400).send({message: error.message})
        }
        if(error?.message === "please give correct email id!"){
            return res.status(400).send({message: error.message})
        }
        if(error?.message === "token can not created"){
            return res.status(400).send({message: error.message});
        }

        return res.status(500).send("Internal server error");
        
    }
}

