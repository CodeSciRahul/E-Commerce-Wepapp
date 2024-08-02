import { getController,deleteController,registerController,updateController } from "../controllers/SellerAccountController.js";
import express from "express";

export const sellerAccountRouter = express.Router();

sellerAccountRouter.post("/",registerController)
sellerAccountRouter.route("/:id")
.get(getController)
.put(updateController)
.delete(deleteController);