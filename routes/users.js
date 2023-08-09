import { Router } from "express";
import signin from "../controllers/users/signin.js";
import register from "../controllers/users/register.js";
import read from "../controllers/users/read.js";
import generateToken from "../middlewares/generateToken.js";
import validator from "../middlewares/validator.js";
import userSignin from "../schemas/user/signin.js";
import userRegister from "../schemas/user/register.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import signout from "../controllers/users/signout.js";
import verifyCode from "../controllers/users/verifyCode.js";

const user_router = Router();

user_router.get('/', read);
user_router.post("/signout", signout);
user_router.post("/signin", validator(userSignin), generateToken,signin);
user_router.post('/register', validator(userRegister), accountExists, createHash,register);
user_router.get('/verify/:verify_code', verifyCode)

export default user_router;