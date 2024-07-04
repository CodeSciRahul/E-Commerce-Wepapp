import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const port = 5000;


//middlware

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/ecommerce',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open',()=>{
    console.log('Database(mongoDb) connected to server')
})

//basic Rout
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})
