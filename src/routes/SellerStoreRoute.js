import { getSeller,deleteSeller,registerSeller,updateSeller } from "../controllers/SellerStoreController.js";
import Router from "express"


export const sellerStoreRoute = Router();
sellerStoreRoute.post("/",registerSeller)
sellerStoreRoute.route("/:id")
.get(getSeller)
.patch(updateSeller)
.delete(deleteSeller)