import { deleteSaler, getSaler, registerSaler, updateSaler } from "../controllers/SalerController.js";
import Router from "express"


export const salerRouter = Router();
salerRouter.post("/",registerSaler)
salerRouter.route("/:id")
.get(getSaler)
.patch(updateSaler)
.delete(deleteSaler)