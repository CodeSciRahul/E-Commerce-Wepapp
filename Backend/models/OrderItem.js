import mongoose from 'mongoose'
import Product from './Product.js'


const orderitemSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
})


export default mongoose.model('Orderitem',orderitemSchema)