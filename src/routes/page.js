import express from "express";
import * as pageController from "../controllers/pageController.js";
import { ROUTES } from "../config/routes.js";
import { cache } from "../middlewares/cache.js";

const router = express.Router();

router.get("/", cache(3600), pageController.home);
router.get(ROUTES.ABOUT, cache(86400), pageController.about);

export default router;
