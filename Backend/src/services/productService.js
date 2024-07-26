import { Error } from "mongoose";
import Product from "../models/Product";

export class ProductService {
    //updatedProduct
    async updateProduct(productId, updatedFields){
        const product = await Product.findByIdAndUpdate(productId, {
            $set: updatedFields
        },{
            new: true
        });
        if(!product){
            throw new Error("Product not found");
        }
        return product;
    }

    //creat new  Product
    async createNewProduct(productData){
        const newProduct = new Product(productData);
        const saveProduct = newProduct.save();

        if(!newProduct) throw new Error("Product not created");
        return saveProduct
    }

    //get single Product by using product id
    async getSingleProduct(ProductId){
        const singleProduct = await Product.find(ProductId);
        if(!singleProduct) throw new Error({message: "Product not getting!"})
        return singleProduct;
    }

    //get all product
    async getAllProduct(){
        const allProduct = await Product.find()
        if(!allProduct) throw new Error({message: "Product not get!"})
        return allProduct;
    }
} 

