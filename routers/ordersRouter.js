import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import orderSchema from "../schemas/orderSchema.js";
import { getOrders, postOrders } from "../controllers/orderController.js";

const ordersRouter = Router();

ordersRouter.post("/orders", validateSchema(orderSchema), postOrders);
ordersRouter.get("/orders", getOrders);

export default ordersRouter;