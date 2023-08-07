import { Router } from "express";
import read from "../controllers/products/read.js";
import read_one from "../controllers/products/read_one.js";

const products_router = Router()
products_router.get('/', read)
products_router.get('/:id', read_one) 

export default products_router