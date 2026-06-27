import { notion } from "../config/notion.js";
import { PROPERTIES } from "../config/properties.js";
import { mapTask, toNotionTask, toNotionUpdate } from "../utils/taskMapper.js";

function buildTaskBody(task) {
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

export async function getTasks(status = null) {
  const body = {
    sorts: [
      {
        property: PROPERTIES.CREATED,
        direction: "descending",
      },
    ],
  };
  if (status) {
    body.filter = {
      property: PROPERTIES.STATUS,
      status: { equals: status },
    };
  }
  const response = await notion.post(
    `/data_sources/${process.env.NOTION_DS_ID}/query`,
    body,
  );
  return response.data.results.map(mapTask);
}
export async function createTask(task) {
  task.status ??= "To Do"; // Defaults to 'To Do' if status is missing
  const body = buildTaskBody(task);
  const response = await notion.post("/pages", body);
  return mapTask(response.data);
}
export async function updateTask(id, task) {
  const response = await notion.patch(`/pages/${id}`, toNotionUpdate(task));
  return mapTask(response.data);
}
export async function deleteTask(id) {
  const response = await notion.patch(`/pages/${id}`, { in_trash: true });
  return mapTask(response.data).title;
}
