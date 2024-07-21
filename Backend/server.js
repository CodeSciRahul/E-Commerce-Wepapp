import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import {router} from "./src/routes/ProductRoute.js"
import { CustomerAddressrouter } from './src/routes/CustomerAddressRoute.js'
import { userRouter } from './src/routes/UserRoute.js'
import { salerRouter } from './src/routes/SalerRoute.js'




const app = express()
const port = 5000;

app.use(cors())
app.use(bodyParser.json())


//Connect to mongodb 
mongoose.connect("mongodb://localhost:27017/ecommerce", {

})
.then(()=> console.log("Connected to Mongodb Successfully!"))
.catch((error) => console.log("Could not Connect to Mongodb",error));



//basic Route
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/api/product",router)
app.use("/api/user-address",CustomerAddressrouter)
app.use("/api/user",userRouter)
app.use("/api/saler",salerRouter)


app.listen(port, ()=> {console.log(`http://localhost:${port}`)});




