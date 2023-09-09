import express from "express";
import {createProduct, deleteProduct, getProduct, getProductById, updateProduct} from "../controllers/productControllers.js";

const router = express.Router();

router.get('/getproducts', getProduct);
router.get('/getproducts/:id', getProductById);
router.post('/getproducts', createProduct);
router.patch('/getproducts/:id', updateProduct);
router.delete('/getproducts/:id', deleteProduct);

export default router;