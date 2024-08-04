import express from "express"
import {authenticateJwt} from "../middlewares/AuthMiddleware.js"
import { loginController } from "../controllers/AuthController.js"

export const protectRoute = express.Router();

protectRoute.get("/user/:id",authenticateJwt,loginController);
