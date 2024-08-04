import express from "express";
import { 
getOrderController,
cancelOrderController,
createOrderController,
updateOrderController } from "../controllers/OrderController.js";

export const orderRouter = express.Router();

orderRouter.post("/",createOrderController);
orderRouter.route("/:id")
.get(getOrderController)
.delete(cancelOrderController)
orderRouter.put("/:id/:status",updateOrderController)