import Product from "../models/utility_visualization/p_products.js";

export const getProduct = async(req,res) =>{
    try {
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}