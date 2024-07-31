import {CartService} from "../services/CartService.js"

const cartService = new CartService();

export const createCardController = async(req,res) => {
    try {
        const createCard = await cartService.createCart(req.body);
        return res.status(200).send({
            data: createCard,
            message: "Card created successfully"
        })
    } catch (error) {
        return res.status(400).send(error?.message);

    }

}

export const getCartController = async(req,res) => {
    try {
        const getcart = await cartService.getcart(req.params.id);
        return res.status(200).send({
            data: getcart,
            message: "card get successfully"
        })
    } catch (error) {
        if(error?.message === "Cart not get"){
            return res.status(400).send({message: error.message})
        }
    }

}

export const deleteCart =async (req,res) => {
    try {
        const deletedCart = await cartService.deleteCart(req.params.id)
        return res.status(200).send({
            data: deleteCart,
            message: "cart item removed successfully"
        })
    } catch (error) {
        if(error?.message === "car can not be deleted"){
            return res.status(200).send({
                message: error.message
            })
        }
        
    }

}