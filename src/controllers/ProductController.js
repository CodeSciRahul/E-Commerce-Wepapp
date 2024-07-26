import { ProductService } from "../services/productService.js";

const productServices = new ProductService();

//get all products
export const getAllProducts = async (req, res) => {
  try {
    const allProduct = await productServices.getAllProduct();
    return res.status(200).send({
      data: allProduct,
      message: "Product successfuly get!"
    })
  } catch (error) {
    if(error?.message === "Product not get!"){
      return res.status(400).send({
        data: null,
        message: error.message
      })
    }
    return res.status(500).send({
      data: null,
      message: "Internal Server Error!"
    })
    }
};


//get a single product by ID
export const getsingleProduct = async (req, res) => {
  try {
    const singleProduct = await productServices.getSingleProduct(req.body.id);
    return res.status(200).send({
        data: singleProduct,
        message: "Product get successfully by id!"
    })
  } catch (error) {
    if(error?.message === "Product not getting!"){
        return res.status(400).send({
            data: null,
            message: error.message
        })
    }

    return res.status(500).send({
        data: null,
        message: "Internal Server Error!"
    })
  }
};


//create a new Product
export const createProduct = async (req, res) => {
  try {
    const createProduct = await productServices.createNewProduct(req.body);
    return res.status(201).send({
      data: createProduct,
      message: "Product created successfully!",
    });
  } catch (error) {
    if (error?.message === "Product not created") {
      res.status(400).send({
        data: null,
        message: error.message,
      });
    }

    return res.status(500).send({
      data: null,
      message: "internal server error!",
    });
  }
};


//Upate a Product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productServices.updateProduct(
      req.body.productId,
      req.body
    );
    return res.status(200).send({
      //response ka function banana h.
      data: updatedProduct,
      message: "product updated succussfully!",
    });
  } catch (error) {
    if (error?.message === "Product not found") {
      return res.status(400).send({
        data: null,
        message: error.message,
      });
    }
    return res.status(500).send({
      data: null,
      message: "internal server error",
    });
  }
};


//delete Product
export const deleteproduct = async(req,res) => {
  try {
    const deleteProduct = await productServices.deleteproduct(req.body.id);
    return res.status(200).send({
      data: deleteProduct,
      message: "Product deleted successfully!"
    })
  } catch (error) {
    if(error?.message === "Product not deleted!"){
      return res.status(400).send({
        data: null,
        message: error.message
      })
    }
    return res.status(500).send({
      data: null,
      message: "Internal server Error!"
    })
  }
  


}
