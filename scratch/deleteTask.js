import { notion } from "../config/notion.js";
import { toNotionUpdate } from "../utils/taskMapper.js";

const response = await notion.patch(
  "/pages/38a4f0d9-49c1-81ca-bdbf-f39c5e46b8e6",
  {
    in_trash: true,
  },
);

console.dir(response.data, { depth: null });
console.log(response.data["in_trash"]);
