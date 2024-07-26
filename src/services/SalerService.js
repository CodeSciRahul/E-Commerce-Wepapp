import Saler from "../models/Saler.js"
import { Error } from "mongoose";


export class SalerService{

    //registerSaler
    async registerSaler(salerdetail){
        const existSaler =await Saler.findOne({email: salerdetail.email});
        console.log(existSaler);
        if(existSaler) throw new Error("Saler already exist!");
        const newSaler = new Saler(salerdetail);
        const savedSaler = await newSaler.save();
        if(!savedSaler) throw new Error("registration failed!");
        return savedSaler;

    }

    //getSalerDetail
    async getSalerDetail(salerId){
        const salerDetail = await Saler.findById(salerId);
        if(!salerDetail) throw new Error("Saler detail not found!");
        return salerDetail;
    }

    //updateSalerDetail
    async updateSalerDetail(salerId,updatefield){
        const updateSaler = await Saler.findByIdAndUpdate(salerId, {$set: updatefield}, {new: true})
        if(!updateSaler) throw new Error("update not possible!");
        return updateSaler;
        }

    //deleteSalerDetail()
    async deleteSealerDetail(salerId){
        const deleteSaler = await Saler.findByIdAndDelete(salerId)
        if(!deleteSaler) throw new Error("saler can not be deleted!");
        return deleteSaler;
    }
}