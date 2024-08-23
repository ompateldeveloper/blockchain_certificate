import { Router } from "express";
import { formatMiddleware } from "./middlewares/formatMiddlewares";
import { authRouter } from "./routers/authRouter";
export const mainRouter = Router()
mainRouter.use(formatMiddleware)
mainRouter.use('/auth',authRouter)

