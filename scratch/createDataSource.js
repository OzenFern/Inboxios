import { notion } from "../src/config/notion.js";
import { toNotionTask } from "../src/utils/taskMapper.js";

throw new Error("Database ID not added");

const body = {
  parent: {
    database_id: "Enter Database Id",
  },

  title: [{ text: { content: "Inboxios Data Source" } }],
      properties: {
        Name: {
        name: 'Name',
        description: 'The name of the task.',
        type: 'title',
        title: {}
      },
        Status: {
        name: 'Status',
        description: 'The status of the task',
        type: 'status',
        status: {
          options: [
            {
              name: 'To Do',
              color: 'red',
              description: 'Tasks that you need to do.'
            },
            {
              name: 'Doing',
              color: 'blue',
              description: "Tasks you're currently doing."
            },
            {
              name: 'Done',
              color: 'green',
              description: 'Tasks that are done.'
            }
          ],
        }
      },
      Due: {
        name: 'Due',
        description: 'The due date for the task.',
        type: 'date',
        date: {}
      },
    Created: {
        name: 'Created',
        description: 'The creation time of the task.',
        type: 'created_time',
        created_time: {}
      },
    }
}

try {
  const response = await notion.post(`data_sources`, body);
  console.dir(response.data, {depth: null});
} catch (error) {
  console.log(error.response.data); 
}
