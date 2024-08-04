import mongoose from "mongoose";




const productSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Image: {
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