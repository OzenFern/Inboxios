import { PROPERTIES } from "../config/properties.js";

export function mapTask(task) {
  const due = task.properties[PROPERTIES.DUE].date;
  const status = task.properties[PROPERTIES.STATUS]?.status?.name;
  if (!status) throw new Error("Task is missing a Status property");

  return {
    id: task.id,
    title: task.properties[PROPERTIES.TITLE]?.title?.[0]?.text?.content ?? "",
    status,
    startDate: due?.start ?? null,
    endDate: due?.end ?? null,
  };
}

/**
 * Set date to null if startDate is null or undefined
 */
function buildDate(task) {
  if (task.startDate == undefined) return { date: null };
  return {
    date: {
      start: task.startDate,
      end: task.endDate,
    },
  };
}

export function toNotionTask(task) {
  return {
    properties: {
      [PROPERTIES.TITLE]: {
        title: [
          {
            text: {
              content: task.title,
            },
          },
        ],
      },
      [PROPERTIES.STATUS]: {
        status: {
          name: task.status,
        },
      },
      [PROPERTIES.DUE]: buildDate(task),
    },
  };
}

export function toNotionUpdate(task) {
  const properties = {};
  if (task.title !== undefined) {
    properties[PROPERTIES.TITLE] = {
      title: [
        {
          text: {
            content: task.title,
          },
        },
      ],
    };
  }

  if (task.status !== undefined) {
    properties[PROPERTIES.STATUS] = {
      status: {
        name: task.status,
      },
    };
  }
  if (task.startDate !== undefined) {
    properties[PROPERTIES.DUE] = buildDate(task);
  }
  return { properties };
}
