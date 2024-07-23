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
    orderDate: {
        type: Date,
        default: Date.now
    },
    orderStatus: {
        type: String,
        enum: ["pending","shipped","delivered"],
        default: "pending"
    }
})

export default mongoose.model('Order',orderSchema)