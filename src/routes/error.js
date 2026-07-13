import express from "express";
import { ROUTE_PARAMS } from "../config/routeParams.js";
import { showError } from "../controllers/errorController.js";
import { cache } from "../middlewares/cache.js";

const router = express.Router();

router.get(`/:${ROUTE_PARAMS.ERROR}`, cache(604800), showError); // Cached for 1 week

export default router;
