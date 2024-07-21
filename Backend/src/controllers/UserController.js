import { UserService } from "../services/UserService.js";

const userService = new UserService();

//register User
export const registerUser = async (req,res) => {
    try {
        const newUser = await userService.registerUser(req.body);
        return res.status(200).send(
            {data: newUser, 
            message: "User register successfully!"}
        );
    } catch (error) {
        if(error?.message ===  "Error register new user!"){
            return res.status(400).send({message: error.message});
        }
        if(error?.message === "User already exist!") return res.status(400).send({message: error.message})
        console.log("console Errord "+ error?.stack)
        return res.status(500).send({message: "Internal Server Error!"});  
    }
}


//get userdetail
export const getUserDetail = async(req,res) => {
    try {
        const getUser = await userService.getUser(req.params.id);
        return res.status(200).send({
            data: getUser,
            message: "fetched user detail!"
        })
    } catch (error) {
        if(error?.message === "User not exist!"){
            return res.status(400).send({message: error.message})
        }
        return res.status(500).send({message: "Internal Server Error!"});
        
    }
}


//update userdetail
export const updateUserDetail = async(req,res) => {
    try {
        const updateUser = await userService.updateUser(req.params.id, req.body);
        return res.status(200).send({
            data: updateUser,
            message: "update Successfully completed!"
        })
        
    } catch (error) {
        if(error?.message === "User not exist"){
            return res.status(400).send({message: error.message});
        }
        return res.status(500).send({message: "Internal Server Error!"});
    }
}

//delete userdetail
export const deleteUserDetail = async(req,res) => {
    try {
        const deleteUser = await userService.deleteUser(req.params.id);
        return res.status(200).send({message: "user delete successfully"});
    } catch (error) {
        if(error?.message === "User not exist!"){
            return res.status(400).send({message: error.message })
        }
        return res.status(500).send({message: "Internal Server Error!"});
    }
}