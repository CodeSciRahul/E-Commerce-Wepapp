import mongoose  from "mongoose";

const salerSchema = new mongoose.schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
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

export default mongoose.model('Saler',salerSchema)