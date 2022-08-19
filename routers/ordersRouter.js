import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import orderSchema from "../schemas/orderSchema.js";
import { postOrders } from "../controllers/orderController.js";

const ordersRouter = Router();

ordersRouter.post("/orders", validateSchema(orderSchema), postOrders);

export default ordersRouter;