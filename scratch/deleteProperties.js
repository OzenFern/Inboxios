import { notion } from "../src/config/notion.js";
import { PROPERTIES } from "../src/config/properties.js";

const ds = await notion.get(`data_sources/${process.env.NOTION_DS_ID}`);

const oldProperties = ds.data.properties;
const allowed = Object.values(PROPERTIES);
console.log(allowed);
console.log(Object.keys(oldProperties));

// console.log(oldProperties);
console.log(ds.data.parent);

for (const key in oldProperties) {
  if (!allowed.includes(key)) {
    try {
      await notion.patch(`/data_sources/${process.env.NOTION_DS_ID}`, {
        properties: {
          [key]: null,
        },
      });

      console.log(`Deleted ${key}`);
    } catch (error) {
      console.log(`Couldn't delete ${key}`);
      console.log(error.response.data.message);
    }
  }
}

// const properties = {};

// for (const key in oldProperties) {
//   if (!allowed.includes(key)) {
//     properties[key] = null;
//   }
// }

// await notion.patch(
//   `/data_sources/${process.env.NOTION_DS_ID}`,
//   { properties },
// );

// console.log(response.data);

