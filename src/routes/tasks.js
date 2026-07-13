import express from "express";
import * as taskController from "../controllers/taskController.js";
import { noCache } from "../middlewares/cache.js";

const router = express.Router();

router.get("/", noCache, taskController.getTasks);
router.post("/", taskController.createTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
