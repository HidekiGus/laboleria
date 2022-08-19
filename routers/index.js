import { Router } from "express";
import cakeRouter from "./cakesRouter.js";

const router = Router();

router.use(cakeRouter);

export default router;