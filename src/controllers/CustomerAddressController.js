import { CustomerAddressService } from "../services/CustomerAddressService.js";

const customerAddress = new CustomerAddressService();

export const createAddress = async(req,res) => {
    try {
        const createAddress = await customerAddress.CreateCustomerAddress(req.body)
        console.log(createAddress);
        return res.status(200).send({
            data: createAddress,
            message: "Address get Successfully"
        })
    } catch (error) {
        if(error?.message === "Address can not created!"){
            return res.status(400).send({
                data: null,
                message: error.message
            })
        }
        if(error?.message === "userId does not exist"){
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

}

//Address of single  user
export const getAddress = async(req,res) => {
    try {
        const getAddress = await customerAddress.getCustomerAddress(req.params.id);
        return res.status(200).send({
            data: getAddress,
            message: "Address get successfully!"
        })
    } catch (error) {
        if(error?.message === "Address can not get!"){
            return res.status(400).send({
                data: null,
                message: error.message
            })
        }
        return res.status(500).send({
            data: null, 
            message: "Internal Serve Error"
        })
        
    }
    


}


export const updateAddress = async(req,res) => {
    try {
        const updateAddress = await customerAddress.updateCustomerAddress(req.params.customerId,req.body);
        return res.status(200).send({
            data: updateAddress,
            message: "Address update successfully!"
        })
    } catch (error) {
        if(error?.message === "update can not successful!"){
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
}

export const deleteAddress = async(req,res) => {
    try {
        const deleteAddress = await customerAddress.deleteCustomerAddress(req.body.customerId);
        return res.status(200).send({
            data: deleteAddress,
            message: "Address deleted Successfully!"
        })
    } catch (error) {
        if(error?.message === "Delete get failed!"){
            return res.status(400).send({
                data: null,
                message: error.message
            })
        }
        res.status(500).send({
            data: null,
            message: "Internal Server Error!"
        })
        
    }
}