import * as taskService from "../services/taskService.js";

export async function getTasks(req, res) {
  const response = await taskService.getTasks(req.query.status);
  res.json(response);
}

export async function createTask(req, res) {
  const task = req.body;
  const response = await taskService.createTask(task);

  res.send(response);
}

export async function updateTask(req, res) {
  const id = req.params.id;
  const task = req.body;

  const response = await taskService.updateTask(id, task);

  res.send(response);
}

export async function deleteTask(req, res) {
  const id = req.params.id;
  const title = await taskService.deleteTask(id);

  res.send(`<h1>${title} page deleted</h1>`);
}
