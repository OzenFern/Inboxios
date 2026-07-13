import { notion } from "../config/notion.js";

const response = await notion.post("/pages", {
  parent: {
    type: "data_source_id",
    data_source_id: process.env.NOTION_DS_ID,
  },
  template: {
    type: "default",
  },
  properties: {
    Name: {
      title: [
        {
          text: {
            content: "Create Task Scratch",
          },
        },
      ],
    },
  },
});

console.log(response.data);
