import Cart from "../models/Cart.js"
import CartItem from "../models/CartItem.js"

export class CartService {
    async  createCart(userId,arrayofProduct){
        const newCartItem = CartItem.insertMany(arrayofProduct);
        const newCart = Cart.create({
            userId: userId,
            items: newCartItem.map(item=> item._id),
        })

        return {
            newCart,
            newCartItem
        }
    }

    //get cart
    async getCart(cartId){
        const allCart = Cart.findById(cartId);
        if(!allCart) throw new Error("Cart not get")
        return allCart;
    }

    async deleteCart(cartId){
        const deletedCart = Cart.findByIdAndUpdate(cartId);
        if(!deletedCart) throw new Error("car can not be deleted");
        return deletedCart;
    }
}