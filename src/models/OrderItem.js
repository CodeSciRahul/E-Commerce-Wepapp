import mongoose from 'mongoose'


const OrderitemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default:1,
        required: true
    },
    price: {
        type: Number,
        required: true

    }
})


export default mongoose.model('Orderitem',OrderitemSchema)