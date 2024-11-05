import { Router } from "express";
import { getAllCartegories, getCartegoryById } from "../controller/index.controllers.js";


export const cartegoryRouter = Router()


cartegoryRouter.get("/cartegory", getAllCartegories)
cartegoryRouter.get("/cartegory/:id", getCartegoryById)