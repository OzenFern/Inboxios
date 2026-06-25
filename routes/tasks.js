import express from "express";
import * as notion from "../services/taskService.js";

const router = express.Router();

router.get("/", notion.getTasks);
router.post("/", async (req, res) => {
  const task = req.body;
  const response = await notion.createTask(task);

  res.send(response); // TODO: Send a proper response to frontend
});
router.patch("/:id", notion.updateTask);
router.delete("/:id", notion.deleteTask);

export default router;
