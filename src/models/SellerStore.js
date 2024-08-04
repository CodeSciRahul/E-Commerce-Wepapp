import mongoose  from "mongoose";

const sellerStoreSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    storeName:{
        type: String,
        required: true
    },
    storeDescription:{
        type: String,
        required: true
    },
    storeAddress:{
        type: String,
        required: true  
    },
    storeCity:{
        type: String,
        required: true
    },
    storeState:{
        type: String,
        required: true
    },
    storePincode:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('SellerStore',sellerStoreSchema)