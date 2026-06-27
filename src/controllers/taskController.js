import * as taskService from "../services/taskService.js";
import query from "../utils/buildQuery.js";

export async function getTasks(req, res) {
  const response = await taskService.getTasks(req.query.status);
  res.json(response);
}

export async function createTask(req, res) {
  const task = req.body;
  const { title } = await taskService.createTask(task);

  res.redirect(
    query({
      message: "created",
      title,
    }),
  );
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { task: body } = req.body;

  const { title } = await taskService.updateTask(id, body);

  res.redirect(
    query({
      message: "updated",
      title,
    }),
  );
}

export async function deleteTask(req, res) {
  const id = req.params.id;
  const { title } = await taskService.deleteTask(id);

  res.redirect(
    query({
      message: "deleted",
      title,
    }),
  );
}
