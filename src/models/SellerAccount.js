import mongoose  from "mongoose";

const SellerAccountSchema = new mongoose.Schema({
    sellerStore:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SellerStore"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    panCard: {
        type: String,
        validate: {
            validator:
                function(v){
                    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v);
                },
                message: props => `${props.value} is not valied pan card`
        },
        required: true

    },
    bankDetail: {
        accountNumber: {
            type:String,
            required: true,
            validate: {
                validator: function(v){
                    return /^[0-9]{9,18}$/.test(v);
                },
                message: props => `${props.value} is not valied account number`
            }
        },
        ifscCode: {
            type: String,
            required: true,
            validate:{
                validator: function (v) {
                    return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(v)
                    
                },
                message: props => `${props.value} is not valied ifsc code`
            }
        },
        bankName: {
            type: String,
            required: true,
        }
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    updatedAt: {
        type:Date,
        default: Date.now
    }
});

export default mongoose.model('SellerAccount', SellerAccountSchema);