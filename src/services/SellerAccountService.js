import SellerAccount from "../models/SellerAccount.js";

export class SellerAccountService {

    //create Saler Account
    async register(userData){
        const isregister = await SellerAccount.create(userData);
        console.log(isregister);
        if(!isregister) throw new Error("facing error register account")
        return isregister;
    }

    async getAccount(userId){
        const isexist = await SellerAccount.findOne({user: userId}).populate('user', "username email").populate('sellerStore');
        if(!isexist) throw new Error("seller not exist")
        return isexist;
    }

    async updateAccount(userId, updatefield){
        const isupdated = await SellerAccount.findOneAndUpdate(
            {user: userId},
            updatefield,
            {
                new: true,
                runValidators: true
            }
        )
        if(!isupdated) throw new Error("facing error to update account")

        return isupdated;

    }

    async deleteAccount(userId){
        const isdeleted = await SellerAccount.findOneAndDelete({user: userId});
        if(!isdeleted) throw new Error("facing error to delete an account")
        return isdeleted;
    }


}