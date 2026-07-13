import { getDataset } from "../../../helpers/getDataset.js";
import { $, on } from "../../../utils.js";

const dialog = $("#task-dialog");
const form = $("#task-form");

const titleInput = $("#title");
const statusInput = $("#status");
const startInput = $("#startDate");
const endInput = $("#endDate");

const dialogTitle = $("#task-dialog-title");
const submitBtn = $("#task-submit");

const { BUTTON_LABELS, ROUTES } = window.APP_CONFIG;

let selectedTask = null;

function setDialogMode(mode) {
  dialog.dataset.mode = mode;

  dialogTitle.textContent = mode;
  submitBtn.textContent = mode;
}

function toDateTimeLocal(date) {
  if (!date) return null;

  return `${date}T00:00`;
}

function populateForm(task) {
  titleInput.value = task.title;
  statusInput.value = task.status;
  startInput.value = toDateTimeLocal(task.start);
  endInput.value = toDateTimeLocal(task.end);
}

function resetForm() {
  form.reset();

  titleInput.value = "";
  statusInput.selectedIndex = 0;
  startInput.value = null;
  endInput.value = null;
}

function getCurrentParams() {
  const params = new URLSearchParams(location.search);

  params.delete(window.APP_CONFIG.QUERY_PARAMS.MESSAGE);
  params.delete(window.APP_CONFIG.QUERY_PARAMS.TITLE);
  params.delete("_method");

  return params;
}

// CREATE
on($(`.btn[data-mode="${BUTTON_LABELS.create}"]`), "click", () => {
  const params = getCurrentParams();

  selectedTask = null;

  resetForm();

  setDialogMode(BUTTON_LABELS.create);

  form.action = `${ROUTES.TASKS}?${params}`;
});

// EDIT
on(document, "click", (e) => {
  const params = getCurrentParams();
  params.set("_method", "PATCH");

  const btn = e.target.closest(".task-action");

  if (!btn) return;

  selectedTask = getDataset(btn.closest(".task"));

  populateForm(selectedTask);

  setDialogMode(BUTTON_LABELS.edit);

  form.action = `${ROUTES.TASKS}/${selectedTask.id}?${params}`;
});
