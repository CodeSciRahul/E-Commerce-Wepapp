import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { mongodbConnect } from './connection'
import {ProductRoute} from "./src/routes/ProductRoute"

const app = express()
const port = 5000;


app.use(cors())
app.use(bodyParser.json())

mongodbConnect()

//basic Route
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/",ProductRoute)


app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})
