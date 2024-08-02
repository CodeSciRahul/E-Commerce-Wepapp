import { SellerAccountService } from "../services/SellerAccountService.js";

const sellerAccount = new SellerAccountService();

export const registerController = async (req,res) => {
try {
    const isregistered = await sellerAccount.register(req.body);
    console.log(isregistered);
    return res.status(200).send({
        data: isregistered,
        message: "account registerd successfully"
    })

} catch (error) {
    if(error?.message === "facing error register account") {
        return res.status(400).send({message: error.message})
    }
    console.error(error.message); // Log only the error message

    if (error.name === "ValidationError") {
        return res.status(400).send({
            message: error.message,
            errors: error.errors, // This gives more details about the validation errors
        });
    }

    return res.status(500).send("Internal server error");
}


}

export const getController = async(req,res) => {
    try {
        const isget = await sellerAccount.getAccount(req.params.id);
        return res.status(200).send({
            data: isget,
            message: "seller detail get successfully"
        })
    } catch (error) {
        if(error?.message === "seller not exist"){
            return res.status(400).send({message:error.message})
        }
        return res.status(500).send("internal server error")
    }

}

export const updateController = async(req,res) => {
    try {
        const isupdated = await sellerAccount.updateAccount(req.params.id, req.body);
        return res.status(200).send({
            data: isupdated,
            message: "seller detail updated successfully"
        })

    } catch (error) {
        console.log(error?.stack)

        if(error?.message === "facing error to update account") {
            return res.status(400).send({message: error.message});
        }
        return res.status(500).send("Internal server error");
    }

}

export const deleteController = async(req,res) => {
    try {
        const isdeleted = await sellerAccount.deleteAccount(req.params.id);
        return res.status(200).send({
            data: isdeleted,
            message: "seller deleted successfully"
        })
    } catch (error) {
        if(error?.message === "facing error to delete an account") {
            return res.status(400).send({message: error.message})
        }
        return res.status(500).send("Internal server error")
    }
}