import { Router } from "express";
import { postCakes } from "../controllers/cakeController.js";
import validateSchema from "../middlewares/validateSchema.js";
import cakeSchema from "../schemas/cakeSchema.js";

const cakeRouter = Router();

cakeRouter.post("/cakes", validateSchema(cakeSchema), postCakes);

export default cakeRouter;