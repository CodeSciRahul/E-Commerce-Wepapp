import { createAddress,deleteAddress,updateAddress,getAddress } from "../controllers/CustomerAddressController.js";
import express from "express"

export const CustomerAddressrouter = express.Router();


CustomerAddressrouter.post("/",createAddress)
CustomerAddressrouter.route("/:id")
.get(getAddress)
.put(updateAddress)
.delete(deleteAddress)
