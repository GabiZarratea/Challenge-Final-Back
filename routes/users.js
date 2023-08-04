import Router from "express";
import signin from "../controllers/users/signin.js";
import register from "../controllers/users/register.js";

let auth_router = Router();

auth_router.post("/signin", signin);
auth_router.post('/register', register);

export default auth_router;