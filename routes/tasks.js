import express from "express";
import * as notion from "./services/notion.js";

const router = express.Router();

router.get("/", notion.getTasks);
router.post("/", notion.createTask);
router.patch("/:id", notion.updateTask);
router.delete("/:id", notion.deleteTask);

export default router;
