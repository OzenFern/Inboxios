import { notion } from "../config/notion.js";
import { mapTask, toNotionTask, toNotionUpdate } from "../utils/taskMapper.js";

function showError(error) {
  console.error(error.response?.data);
  throw error;
}

function createBody(task) {
  return {
    parent: {
      type: "data_source_id",
      data_source_id: process.env.NOTION_DS_ID,
    },
    template: {
      type: "default",
    },
    ...toNotionTask(task),
  };
}

export async function getTasks() {
  try {
    const response = await notion.post(
      `/data_sources/${process.env.NOTION_DS_ID}/query`,
    );
    return response.data.results.map(mapTask);
  } catch (error) {
    showError(error);
  }
}
export async function createTask(task) {
  try {
    task.status ??= "To Do"; // Defaults to To Do if status is missing
    const body = createBody(task);
    const response = await notion.post("/pages", body);
    return mapTask(response.data);
  } catch (error) {
    showError(error);
  }
}
export async function updateTask(id) {}
export async function deleteTask(id) {
  try {
    const response = await notion.patch(`/pages/${id}`, { in_trash: true });
    return mapTask(response.data).title;
  } catch (error) {
    showError(error);
  }
}
