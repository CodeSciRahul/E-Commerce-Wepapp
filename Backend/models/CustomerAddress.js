import mongoose from "mongoose";

const customerAddressSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    customerCity: {
        type: String,
        required: true
    },
    customerState: {
        type: String,
        required: true
    },
    customerPincode: {
        type: Number,
        required: true
    },
    customerPhone: {
        type: Number,
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

export default mongoose.model('CustomerAddress',customerAddressSchema)
