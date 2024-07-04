import mongoose from "mongoose";
import OrderItem from "./OrderItem";
import User from "./User.js";
import Saler from "./Saler.js";
import CustomerAddress from "./CustomerAddress.js";


const orderSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    orderItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orderitem',
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    saler: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Saler',
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