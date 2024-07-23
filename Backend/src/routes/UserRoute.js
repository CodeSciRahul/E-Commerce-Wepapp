import { getuserDetail,deleteUserDetail,updateUserDetail, registerUser} from "../controllers/UserController.js";
import { loginController } from "../controllers/AuthController.js";
import Router from "express"

export const userRouter = Router();


userRouter.post("/",registerUser)
userRouter.post("/login",loginController)
userRouter.route("/:id")
.get(getuserDetail)
.patch(updateUserDetail)
.delete(deleteUserDetail)