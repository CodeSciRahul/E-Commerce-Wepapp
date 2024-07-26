import Order from "../models/Order.js"
import OrderItem from "../models/OrderItem.js"
import CustomerAddress from "../models/CustomerAddress.js";

export class OrderService {

    //createOrder
    async createOrder(userId,customerAddressId,arrayofProduct){
        const addressExist = await CustomerAddress.exists(customerAddressId);
        if(!addressExist) throw new Error("customer address does not exist")

        const newOrderitem = await OrderItem.bulkSave(arrayofProduct);
        const newOrder = await Order.create({
            customerAddress: customerAddressId,
            customer: userId,
            orderItems: newOrderitem.map((item)=> item.id)
        });
        return {
            newOrderitem,
            newOrder
        };
    }
    //update order
    async updateOrder(orderId){
        //logic
    }

    //delete order
    async deleteOrder(orderId){
        //logic
    }
}