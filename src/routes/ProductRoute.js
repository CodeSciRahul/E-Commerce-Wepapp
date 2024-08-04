import express from "express"
import { 
getAllProducts,
getsingleProduct,
createProduct,
updateProduct,
deleteproduct} from "../controllers/ProductController.js"


export const router  = express.Router()

router.route("/")
.get(getAllProducts)
.post(createProduct)

router.route("/:id")
.get(getsingleProduct)
.put(updateProduct)
.delete(deleteproduct);

