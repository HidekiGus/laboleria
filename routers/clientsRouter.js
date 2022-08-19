import { Router } from "express";
import { postClient } from "../controllers/clientController.js";
import validateSchema from "../middlewares/validateSchema.js";
import clientSchema from "../schemas/clientSchema.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(clientSchema), postClient);

export default clientsRouter;