import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import {router} from "./src/routes/ProductRoute.js"
import { CustomerAddressrouter } from './src/routes/CustomerAddressRoute.js'
import { userRouter } from './src/routes/UserRoute.js'
import { sellerStoreRoute } from './src/routes/SellerStoreRoute.js'
import { sellerAccountRouter } from './src/routes/SellerAccountRoute.js'
import { orderRouter } from './src/routes/OrderRoute.js'
import 'dotenv/config'




const app = express()
const port = process.env.port;
const url = "mongodb://localhost:27017/ecommerce"

app.use(cors())
app.use(bodyParser.json())


//Connect to mongodb 
mongoose.connect(url, {})
.then(()=> console.log("Connected to Mongodb Successfully!"))
.catch((error) => console.log("Could not Connect to Mongodb",error));



//basic Route
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/api/product",router)
app.use("/api/user-address",CustomerAddressrouter)
app.use("/api/user",userRouter)
app.use("/api/sellerStore",sellerStoreRoute)
app.use("/api/sellerBankDetail",sellerAccountRouter)
app.use("/api/order",orderRouter);

app.listen(port, ()=> {console.log(`http://localhost:${port}`)});




