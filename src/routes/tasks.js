import express from "express";
import * as notion from "../services/taskService.js";

// TODO: Send a proper response to frontend

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await notion.getTasks(req.query.status);
  res.json(response);
});

router.post("/", async (req, res) => {
  const task = req.body;
  const response = await notion.createTask(task);

  res.send(response);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const task = req.body;

  const response = await notion.updateTask(id, task);

  res.send(response);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const title = await notion.deleteTask(id);
  res.send(`<h1>${title} page deleted</h1>`);
});

export default router;
