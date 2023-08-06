import { Router } from "express";
import create from "../controllers/gamers/create.js";
import read from "../controllers/gamers/read.js";

const gamers_router = Router()

gamers_router.post('/gamers', create); 
gamers_router.get('/', read)

export default gamers_router;