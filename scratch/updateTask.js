import { notion } from "../config/notion.js";
import { toNotionUpdate } from "../utils/taskMapper.js";

const response = await notion.patch(
  "/pages/38a4f0d949c1810d905be2e281461b9a",
  toNotionUpdate({
    startDate: "2026-06-06",
    endDate: "2026-06-24",
  }),
);

console.dir(response.data, { depth: null });

const properties = {
  properties: {
    Name: {
      title: [
        {
          text: {
            content: "Update Task Scratch",
          },
        },
      ],
    },
  },
};
