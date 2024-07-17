import mongoose from "mongoose";

const productvarientSchema = new mongoose.Schema({
    productSize: {
        type: String || Number,
        required: true
    },
    productColor: {
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.model('ProductVarient',productvarientSchema)