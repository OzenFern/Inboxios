import express from "express";
import { ROUTE_PARAMS } from "../config/routeParams.js";
import { showError } from "../controllers/errorController.js";

const router = express.Router();

router.get(`/:${ROUTE_PARAMS.ERROR}`, showError);

export default router;
