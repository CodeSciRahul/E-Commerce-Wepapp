import mongoose from 'mongoose'

export const mongodbConnect = mongoose.connect('mongodb://localhost:27017/ecommerce',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open',()=>{
    console.log('Database(mongoDb) connected to server')
})