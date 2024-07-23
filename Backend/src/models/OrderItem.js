import mongoose from 'mongoose'


const orderitemSchema = new mongoose.Schema({
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