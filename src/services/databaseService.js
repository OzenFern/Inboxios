import { validateDatabase } from "../utils/validateDatabase.js";
import { notion } from "../config/notion.js";

export async function checkDatabase() {
  const response = await notion.get(
    `/data_sources/${process.env.NOTION_DS_ID}`,
  );

  validateDatabase(response.data);

  return response.data;
}
