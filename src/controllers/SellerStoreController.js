import { SellerStoreService } from "../services/SellerStoreService.js";

const sellerStoreService = new SellerStoreService();


//registerSaler
export const registerSeller = async(req,res) => {
    try {
        const newSaler = await sellerStoreService.registerSeller(req.body);
        return res.status(200).send({
            data: newSaler,
            message: "user registered successfuly!"
        })
    } catch (error) {
        if(error?.message === "registration failed!"){
            return res.status(400).send({message: error.message})
        }
    }
    return res.status(500).send("Internal Server Error")
      

}

//getuserdetail
export const getSeller = async(req,res) => {
    try {
        const userData = await sellerStoreService.getSellerDetail(req.params.id);
        return res.status(200).send({
            data: userData,
            message: "user data fetched successfully!"
        })
    } catch (error) {
        if(error?.message === "Saler detail not found!"){
            return res.status(400).send({message: error.message});
        }
        return res.status(500).send("internal server error");
    }
}

//updatedetail
export const updateSeller = async(req,res) => {
    try {
        const updateDetail = await sellerStoreService.updateSellerDetail(req.params.id, req.body);
        return res.status(200).send({
            data: updateDetail,
            message: "saler updated successfully!"
        })
    } catch (error) {
        if(error?.message === "update not possible!"){
            return res.status(400).send({message: error.message});
        }
        return res.status(500).send("internal server error!");
        
    }
}

//deletedetail
export const deleteSeller = async(req,res) => {
    try {
        const deleteDetail = await sellerStoreService.deleteSellerDetail(req.params.id);
        return res.status(200).send({data: deleteDetail, message: "saler account deleted successfully!"});
    } catch (error) {
        if(error.message === "saler can not be deleted!"){
            return res.status(500).send({message: error.message});
        }
        return res.status(500).send("internal server error!");
    }
}