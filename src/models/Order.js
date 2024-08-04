import mongoose from "mongoose";



const orderSchema = new mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true
    }],
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    customerAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerAddress',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["pending","shipped","delivered","Cancelled"],
        default: "pending"
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.model('Order',orderSchema)