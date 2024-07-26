import { createAddress,deleteAddress,updateAddress,getAddress } from "../controllers/CustomerAddressController.js";
import express from "express"

export const CustomerAddressrouter = express.Router();


CustomerAddressrouter.route("/")
.post(createAddress)
.get(getAddress)
.put(updateAddress)
.delete(deleteAddress);
