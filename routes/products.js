import { Router } from "express";
import read from "../controllers/products/read.js";
import read_one from "../controllers/products/read_one.js";
import create from "../controllers/products/create.js";
import productValidaton from "../schemas/products/productValidation.js"
import validator from "../middlewares/validator.js";
import Delete from "../controllers/products/delete.js"
import Update from "../controllers/products/update.js"

const products_router = Router()
products_router.get('/', read)
products_router.get('/:id', read_one) 
products_router.post('/created', validator(productValidaton), create)
products_router.delete('/:id', Delete)
products_router.put('/:id', Update)
export default products_router