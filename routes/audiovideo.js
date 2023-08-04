import { Router } from "express";
import read from "../controllers/AudioVideo/read.js";

const audioVideo_router = Router()
audioVideo_router.get('/', read)

export default audioVideo_router