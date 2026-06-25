export function mapTask(task) {
  const due = task.properties.Due.date;
  const status = task.properties.Status?.status?.name;
  if (!status) throw new Error("Task is missing a Status property");

  return {
    id: task.id,
    title: task.properties.Name.title[0]?.text?.content ?? "",
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
      Name: {
        title: [
          {
            text: {
              content: task.title,
            },
          },
        ],
      },
      Status: {
        status: {
          name: task.status,
        },
      },
      Due: buildDate(task),
    },
  };
}

export function toNotionUpdate(task) {
  const properties = {};
  if (task.title !== undefined) {
    properties.Name = {
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
    properties.Status = {
      status: {
        name: task.status,
      },
    };
  }
  if (task.startDate !== undefined) {
    properties.Due = buildDate(task);
  }
  return { properties };
}
