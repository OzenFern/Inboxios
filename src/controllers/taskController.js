import * as taskService from "../services/taskService.js";
import query from "../utils/buildUrl.js";
import { QUERY_PARAMS, MESSAGES } from "../config/queryParams.js";
import { ROUTES } from "../config/routes.js";

export async function getTasks(req, res) {
  const tasks = await taskService.getTasks(req.query.status);
  res.render("tasks", { tasks });
}

export async function createTask(req, res) {
  const task = req.body;
  const { title } = await taskService.createTask(task);

  res.redirect(
    query(ROUTES.TASKS, {
      [QUERY_PARAMS.MESSAGE]: MESSAGES.CREATED,
      [QUERY_PARAMS.TITLE]: title,
    }),
  );
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { task: body } = req.body;

  const { title } = await taskService.updateTask(id, body);

  res.redirect(
    query(ROUTES.TASKS, {
      [QUERY_PARAMS.MESSAGE]: MESSAGES.UPDATED,
      [QUERY_PARAMS.TITLE]: title,
    }),
  );
}

export async function deleteTask(req, res) {
  const id = req.params.id;
  const { title } = await taskService.deleteTask(id);

  res.redirect(
    query(ROUTES.TASKS, {
      [QUERY_PARAMS.MESSAGE]: MESSAGES.DELETED,
      [QUERY_PARAMS.TITLE]: title,
    }),
  );
}
