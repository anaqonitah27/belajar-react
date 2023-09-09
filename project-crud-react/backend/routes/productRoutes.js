import express from "express";
import {createProduct, getProduct, getProductById} from "../controllers/productControllers.js";

const router = express.Router();

router.get('/getproducts', getProduct);
router.get('/getproducts/:id', getProductById);
router.post('/getproducts', createProduct);

export default router;