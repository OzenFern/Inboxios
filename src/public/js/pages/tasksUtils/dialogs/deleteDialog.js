import { getDataset } from "../../../helpers/getDataset.js";
import { $, on } from "../../../utils.js";

const form = $("#delete-form");
const { ROUTES, QUERY_PARAMS } = window.APP_CONFIG;

on(document, "click", (e) => {
  const btn = e.target.closest(".btn-danger");

  if (!btn) return;

  const task = getDataset(btn.closest(".task"));

  $("#delete-task-title").textContent = task.title;

  const params = new URLSearchParams(location.search);

  // Remove old flash messages
  params.delete(QUERY_PARAMS.MESSAGE);
  params.delete(QUERY_PARAMS.TITLE);

  // Convert POST into DELETE
  params.set("_method", "DELETE");

  form.action = `${ROUTES.TASKS}/${task.id}?${params}`;
});
