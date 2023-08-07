import { Router } from "express";
import signin from "../controllers/users/signin.js";
import register from "../controllers/users/register.js";
import read from "../controllers/users/read.js";

const user_router = Router();

user_router.post("/signin", signin);
user_router.post('/register', register);
user_router.get('/', read);

export default user_router;