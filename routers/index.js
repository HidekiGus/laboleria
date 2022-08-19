import { Router } from "express";
import cakeRouter from "./cakesRouter.js";
import clientsRouter from "./clientsRouter.js";

const router = Router();

router.use(cakeRouter);
router.use(clientsRouter);

export default router;