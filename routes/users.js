import { Router } from "express";
import signin from "../controllers/users/signin.js";
import register from "../controllers/users/register.js";
import read from "../controllers/users/read.js";
import generateToken from "../middlewares/generateToken.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import accountNotExists from "../middlewares/accountNotExists.js"
import validator from "../middlewares/validator.js";
import userSignin from "../schemas/user/signin.js";
import userRegister from "../schemas/user/register.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import signout from "../controllers/users/signout.js";
import uploadFile from "../middlewares/upload_file.js";
import  { uploadImage } from "../services/firebase.cjs";
import registerGoogle from "../controllers/users/registerGoogle.js";

const user_router = Router();

user_router.get('/', read);
user_router.post("/signout", signout);
user_router.post("/signin", validator(userSignin), accountNotExists, passwordIsOk,generateToken,signin);
user_router.post('/register', uploadFile(),uploadImage,validator(userRegister), accountExists, createHash,register);
user_router.post('/google', validator(userRegister), accountExists, createHash,registerGoogle);

export default user_router;
