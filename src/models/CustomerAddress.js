import mongoose from "mongoose";

const customerAddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
    
});

customerAddressSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export default mongoose.model('CustomerAddress',customerAddressSchema)
