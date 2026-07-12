import * as taskService from "../services/taskService.js";
import query from "../utils/buildUrl.js";
import { QUERY_PARAMS, MESSAGES } from "../config/queryParams.js";
import { ROUTES } from "../config/routes.js";

export async function getTasks(req, res) {
  const status = QUERY_PARAMS.STATUS;
  const tasks = await taskService.getTasks(req.query[status]);

  res.render("tasks", {
    tasks,
    [QUERY_PARAMS.STATUS]: req.query[QUERY_PARAMS.STATUS],
    [QUERY_PARAMS.MESSAGE]: req.query[QUERY_PARAMS.MESSAGE],
    [QUERY_PARAMS.TITLE]: req.query[QUERY_PARAMS.TITLE],
  });
}

export async function createTask(req, res) {
  const task = {
    ...req.body,
    startDate: req.body.startDate || null,
    endDate: req.body.endDate || null,
  };
  const { title } = await taskService.createTask(task);

  const params = {
    [QUERY_PARAMS.MESSAGE]: MESSAGES.CREATED,
    [QUERY_PARAMS.TITLE]: title,
  };

  if (req.query[QUERY_PARAMS.STATUS]) {
    params[QUERY_PARAMS.STATUS] = req.query[QUERY_PARAMS.STATUS];
  }

  res.redirect(query(ROUTES.TASKS, params));
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const task = {
    ...req.body,
    startDate: req.body.startDate || null,
    endDate: req.body.endDate || null,
  };

  const { title } = await taskService.updateTask(id, task);

  const params = {
    [QUERY_PARAMS.MESSAGE]: MESSAGES.UPDATED,
    [QUERY_PARAMS.TITLE]: title,
  };

  if (req.query[QUERY_PARAMS.STATUS]) {
    params[QUERY_PARAMS.STATUS] = req.query[QUERY_PARAMS.STATUS];
  }

  res.redirect(query(ROUTES.TASKS, params));
}

export async function deleteTask(req, res) {
  const id = req.params.id;
  const { title } = await taskService.deleteTask(id);

  const params = {
    [QUERY_PARAMS.MESSAGE]: MESSAGES.DELETED,
    [QUERY_PARAMS.TITLE]: title,
  };

  if (req.query[QUERY_PARAMS.STATUS]) {
    params[QUERY_PARAMS.STATUS] = req.query[QUERY_PARAMS.STATUS];
  }

  res.redirect(query(ROUTES.TASKS, params));
}
