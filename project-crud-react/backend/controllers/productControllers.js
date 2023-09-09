import Product from "../models/utility_visualization/p_products.js";

export const getProduct = async(req,res) =>{
    try {
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getProductById = async(req,res) =>{
    try {
        const response = await Product.findOne({
            where:{
                id: req.params.id
            }
        })

        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createProduct = async(req,res) =>{
    try {
        await Product.create(req.body);
        res.status(200).json("Data Created");
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProduct = async(req,res) =>{
    try {
        await Product.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json("Data Updated");
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async(req,res) =>{
    try {
        await Product.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json("Data Deleted");
    } catch (error) {
        console.log(error.message);
    }
}