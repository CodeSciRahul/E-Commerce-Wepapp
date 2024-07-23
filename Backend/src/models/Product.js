import mongoose from "mongoose";




const productSchema =  new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    stock:{
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        enum: ["shoes","clothing"],
        required: true
    },
    variant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductVarient',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Saler',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Product',productSchema);