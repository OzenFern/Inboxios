import express from "express";
import * as pageController from "../controllers/pageController.js";
import { ROUTES } from "../config/routes.js";

const router = express.Router();

router.get("/", pageController.home);
router.get(ROUTES.ABOUT, pageController.about);

export default router;
