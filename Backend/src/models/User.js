import moongose from 'mongoose'

const userSchema = new moongose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }

})

export default moongose.model('User',userSchema)