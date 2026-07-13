import { $, on, storageCache } from "../../utils.js";

const taskFilter = $("#status-filter");
const status = window.APP_CONFIG.QUERY_PARAMS.STATUS;

on(taskFilter, "change", async () => {
  const filter = taskFilter.selectedOptions[0].value;
  // Store filter value on change to localStorage
  storageCache.set("task-filter", filter);

  const params = new URLSearchParams({
    [status]: filter,
  });

  location.search = filter ? params : "";
});

on(window, "load", () => {
  const params = new URLSearchParams(location.search);

  if (params.has("status")) {
    taskFilter.value = params.get("status");
    return;
  }

  const savedFilter = storageCache.get("task-filter");

  if (!savedFilter) return;

  const search = new URLSearchParams({
    [status]: savedFilter,
  });

  location.search = search;
});
