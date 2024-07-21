import { getUserDetail,deleteUserDetail,updateUserDetail, registerUser} from "../controllers/UserController.js";
import Router from "express"

export const userRouter = Router();


userRouter.post("/",registerUser)
userRouter.route("/:id")
.get(getUserDetail)
.patch(updateUserDetail)
.delete(deleteUserDetail)