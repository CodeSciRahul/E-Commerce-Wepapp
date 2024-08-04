import SellerStore from "../models/SellerStore.js";
export class SellerStoreService{

    //registerSaler
    async registerSeller(selleData){
        const newSaler = await SellerStore.create(selleData);
        if(!newSaler) throw new Error("registration failed!");
        return newSaler;

    }

    //getSalerDetail[]
    async getSellerDetail(userId){
        const salerDetail = await SellerStore.findOne({user: userId}).populate('user', 'username email');
        if(!salerDetail) throw new Error("Saler detail not found!");
        return salerDetail;
    }

    //updateSalerDetail
    async updateSellerDetail(userId,updatefield){
        const updateSaler = await SellerStore.findOneAndUpdate(
            {user: userId},
            updatefield,
            {
                new: true,
                runValidators: true
            }
        )
        if(!updateSaler) throw new Error("update not possible!");
        return updateSaler;
        }

    //deleteSalerDetail()
    async deleteSellerDetail(userId){
        const deleteSaler = await SellerStore.findOneAndDelete({user: userId})
        if(!deleteSaler) throw new Error("saler can not be deleted!");
        return deleteSaler;
    }
}