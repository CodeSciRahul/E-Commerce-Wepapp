import {OrderService} from "../services/OrderService.js"

const orderService = new OrderService();
export const createOrderController = async(req,res) => {
    try {
        const createOrder = await orderService.createOrder(req.body)
        res.status(200).send({
            data: createOrder,
            message: "order created successfully"
        })
    } catch (error) {
        if(error?.message === "please set address before order"){
            return res.status(400).send({message: error.message});
        }
    }

}

export const getOrderController = async(req,res) => {
    try {
        const getOrder = await orderService.getOrder(req.params.id)
        console.log(getOrder)
        return res.status(200).send({
            data: getOrder,
            message: "get order detail successfully"
        })
    } catch (error) {
        if(error?.message === "Order not found!") {
            return res.status(400).send({
                message: error.message
            })
        }
        
    }

}

export const updateOrderController = async(req,res) => {
    try {
        const updateOrder = await orderService.updateOrder(req.params.id,req.params.status)
        return res.status(200).send({
            data: updateOrder,
            message: "order updated successfully"
        })
    } catch (error) {
        return res.status(400).send(error?.message);
    }
}

export const cancelOrderController = async(req,res) => {
    try {
        const cancelOrder = orderService.cancleOrder(req.params.id)
        return res.status(200).send({
            data: cancelOrder,
            message: "Order cancelled succussfully"
        })
    } catch (error) {
        if(error?.message === "order can not be cancelled"){
            return res.status(400).send({
                message: error.message
            })
        }
    }
}