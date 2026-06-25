import { notion } from "../config/notion.js";
import { mapTask } from "../utils/taskMapper.js";

const response = await notion.post(
  `/data_sources/${process.env.NOTION_DS_ID}/query`,
);
console.log(response.data);
console.log(response.data.results.map(mapTask));
