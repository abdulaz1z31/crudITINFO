import { Router } from "express";
import { loginAuthor, registerAuthor } from "../controller/index.controllers.js";


export const authRouter = Router()


authRouter.post("/register", registerAuthor)
authRouter.post("/login", loginAuthor)