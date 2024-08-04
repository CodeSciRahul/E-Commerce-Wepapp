import mongoose from "mongoose"

const CartItemSchema = new mongoose.Schema({
    Product:{
        type:mongoose.Schema.Type.ObjectId,
        ref: "Product",
        required: true
    },
    Quantity: {
        type: Number,
        default: 1,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
})

export default mongoose ('CartItem',CartItemSchema); 