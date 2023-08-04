import { Router } from "express";
import read from "../controllers/phoneTabs/read.js";

const phoneTabs_router = Router()
phoneTabs_router.get('/', read)

export default phoneTabs_router