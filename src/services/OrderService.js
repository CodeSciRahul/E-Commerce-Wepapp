import Order from "../models/Order.js"
import OrderItem from "../models/OrderItem.js"
import CustomerAddress from "../models/CustomerAddress.js";

export class OrderService {

    //createOrder
    async createOrder(userId,customerAddressId,arrayofProduct){
        const existAddress = CustomerAddress.exist(customerAddressId);
        if(!existAddress) throw new Error("please set address before order");

        const newOrderItems = await OrderItem.insertMany(arrayofProduct);
        const price = newOrderItems.reduce((acc,item) => {
            acc+item.price * item.quantity
        },0)
        const newOrder = await Order.create({
            orderItems: newOrderItems.map(item => item._id),
            customer: userId,
            customerAddress: customerAddressId,
            totalPrice: price
        })
        return{
            newOrderItems,
            newOrder
        }
    }
    
    //get order
    async getOrder(orderId){
        const existOrder = await Order.findById(orderId).populate('OrderItem');
        console.log(existOrder);
        if(!existOrder) throw new Error("Order not found!");
        return existOrder;
    }

    //update order
    async updateOrder(orderId,status){
        return Order.findByIdAndUpdate(orderId, {orderStatus: status},{new:true})
    }

    //delete order
    async cancleOrder(orderId){ 
        const cancelledOrder = Order.findByIdAndUpdate(orderId, {orderStatus: Cancelled}, {new: true})
        if(!cancelledOrder) throw new Error("order can not be cancelled");
        return cancelledOrder;
    }
}