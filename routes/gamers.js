import { Router } from "express";
import read_one from "../controllers/gamers/read_one.js";

const gamers_router = Router()
gamers_router.get('/product/:id', read_one) 

export default gamers_router