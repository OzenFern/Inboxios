import express from "express";
import { showError } from "../controllers/errorController.js";

const router = express.Router();

router.get("/404", showError);
router.get("/500", showError);

export default router;
