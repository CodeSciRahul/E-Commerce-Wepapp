import moongose from 'mongoose'

const userSchema = new moongose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    createdat: {
        type: Date,
        default: Date.now
    },
    updatedat:{
        type: Date,
        default: Date.now
    }

})

export default mongoose.model('User',userSchema)