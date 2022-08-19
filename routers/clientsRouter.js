import { Router } from "express";
import { postClient, getClientOrders } from "../controllers/clientController.js";
import validateSchema from "../middlewares/validateSchema.js";
import clientSchema from "../schemas/clientSchema.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(clientSchema), postClient);
clientsRouter.get("/clients/:id/orders", getClientOrders);

export default clientsRouter;