import express from "express";
import * as pageController from "../controllers/pageController.js";

const router = express.Router();

router.get("/", pageController.home);
router.get("/about", pageController.about);

export default router;
