import express from "express";
import * as notion from "../services/taskService.js";

// TODO: Send a proper response to frontend

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await notion.getTasks();
  res.json(response);
});
router.post("/", async (req, res) => {
  const task = req.body;
  const response = await notion.createTask(task);

  res.send(response);
});
router.patch("/:id", notion.updateTask);
router.delete("/:id", notion.deleteTask);

export default router;
