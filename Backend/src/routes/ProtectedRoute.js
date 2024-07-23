import express from "express"
import { authenticateJwt } from "../middlewares/AuthMiddleware.js"
import { loginController } from "../controllers/AuthController.js"

export const router = express.Router();

router.get("/user/:id",authenticateJwt,loginController);
