import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
    User:{
        type: mongoose.Schema.Type.ObjectId,
        ref: "User",
        required: true
    },
    items:[{
        type: mongoose.Schema.Type.ObjectId,
        ref: "CartItem",
        required: true
    }],
    TotalPrice:{
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
});

CartSchema.pre('save', function(next){
    this.TotalPrice = this.items.reduce((acc,item)=>{
        return acc+item.price * item.Quantity;
    },0)

    this.updatedAt = Date.now();
    next();
})

export default mongoose.model("Cart", CartSchema);