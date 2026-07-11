import { api } from "../../api.js";
import { getTaskDataset } from "../../helpers/getTaskDataset.js";
import { $, on } from "../../utils.js";

let selectedTask = null;

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-danger");
  if (!btn) return;

  selectedTask = getTaskDataset(btn.closest(".task"));

  $("#delete-task-title").textContent = selectedTask.title;
});

on($("#confirm-delete"), "click", async () => {
  if (!selectedTask) return;

  await api(window.location + `/${selectedTask.id}`, {
    method: "DELETE",
  });

  location.reload();
});
