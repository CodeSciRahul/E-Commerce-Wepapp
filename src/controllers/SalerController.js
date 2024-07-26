import { SalerService } from "../services/SalerService.js";

const salerService = new SalerService();


//registerSaler
export const registerSaler = async(req,res) => {
    try {
        const newSaler = await salerService.registerSaler(req.body);
        return res.status(200).send({
            data: newSaler,
            message: "user registered successfuly!"
        })
    } catch (error) {
        if(error?.message === "Saler already exist!"){
            return res.status(400).send({message: error.message});

        }
        if(error?.message === "registration failed!"){
            return res.status(400).send({message: error.message})
        }
    }
    return res.status(500).send("Internal Server Error")
      

}

//getuserdetail
export const getSaler = async(req,res) => {
    try {
        const userData = await salerService.getSalerDetail(req.params.id);
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
export const updateSaler = async(req,res) => {
    try {
        const updateDetail = await salerService.updateSalerDetail(req.params.id, req.body);
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
export const deleteSaler = async(req,res) => {
    try {
        const deleteDetail = await salerService.deleteSealerDetail(req.params.id);
        return res.status(200).send({data: deleteDetail, message: "saler account deleted successfully!"});
    } catch (error) {
        if(error.message === "saler can not be deleted!"){
            return res.status(500).send({message: error.message});
        }
        return res.status(500).send("internal server error!");
    }
}