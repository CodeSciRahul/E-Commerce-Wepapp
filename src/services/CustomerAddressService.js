import CustomerAddress from "../models/CustomerAddress.js"
import { Error } from "mongoose"


export class CustomerAddressService {


    //create an address
    async CreateCustomerAddress(address){
        const createAddress = new CustomerAddress(address);
        const saveAddress =await createAddress.save();
        if(!saveAddress) throw new Error("Address can not created!");
        return saveAddress;
    }

    //get an address of single Customer
    async getCustomerAddress(customerId){
        const getAddress = await CustomerAddress.find(customerId);
        if(!getAddress) throw new Error("Address can not get!");
        return getAddress;
    }

    //updateAddress an address of Customer
    async updateCustomerAddress(customerId,address){
        const updateAddress = await CustomerAddress.findByIdAndUpdate(customerId, {$set: address},{new: true})
        if(!updateAddress)  throw new Error("update can not successful!");
        return updateAddress;
    }

    //delete an address of Customer
    async deleteCustomerAddress(customerId){
        const deleteAddress = await CustomerAddress.findByIdAndDelete(customerId);
        if(!deleteAddress)  throw new Error("Delete get failed!");
        return deleteAddress;
    }

}