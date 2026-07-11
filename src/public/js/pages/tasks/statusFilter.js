import { $, on } from "../../utils.js";

const taskFilter = $("#status-filter");

on(taskFilter, "change", async () => {
  const filter = taskFilter.selectedOptions[0].value;
  const params = new URLSearchParams({
    status: filter,
  });

  if (filter === "") return (location.search = "");
  location.search = params;
});

on(window, "load", () => {
  const params = new URLSearchParams(location.search);
  const status = params.get("status") ?? "";

  taskFilter.value = status;
});
