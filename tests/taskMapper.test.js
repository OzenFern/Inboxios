import { test, expect } from "vitest";
import { mapTask, toNotionTask, toNotionUpdate } from "../utils/taskMapper.js";

test("Maps Notion page properties to task", () => {
  expect(mapTask(notionPage)).toEqual({
    id: "3874f0d9-49c1-80dd-b4cf-d87a7e6b8c29",
    title: "Hello From Task API",
    status: "To Do",
    startDate: null,
    endDate: null,
  });
});

test("creates notion payload", () => {
  const payload = toNotionTask({
    title: "Learn Axios",
    status: "Doing",
    startDate: "2026-06-25",
    endDate: null,
  });

  expect(payload).toEqual({
    properties: {
      Name: { title: [{ text: { content: "Learn Axios" } }] },
      Status: { status: { name: "Doing" } },
      Due: { date: { start: "2026-06-25", end: null } },
    },
  });
});

test("Checks if null date is properly handled", () => {
  const task = { startDate: null };

  expect(toNotionUpdate(task)).toEqual({
    properties: {
      Due: {
        date: null,
      },
    },
  });
});

const notionPage = {
  object: "page",
  id: "3874f0d9-49c1-80dd-b4cf-d87a7e6b8c29",
  created_time: "2026-06-22T17:15:00.000Z",
  last_edited_time: "2026-06-25T06:46:00.000Z",
  created_by: {
    object: "user",
    id: "1e6d872b-594c-8108-81f4-00026f5c37ec",
  },
  last_edited_by: {
    object: "user",
    id: "1e6d872b-594c-8108-81f4-00026f5c37ec",
  },
  cover: null,
  icon: {
    type: "icon",
    icon: {
      name: "checkmark",
      color: "purple",
    },
  },
  parent: {
    type: "data_source_id",
    data_source_id: "88f4f0d9-49c1-838d-b6e4-87e3e4e32d74",
    database_id: "cd94f0d9-49c1-834a-ab81-810764b9cd3c",
  },
  in_trash: false,
  is_archived: false,
  is_locked: false,
  properties: {
    "P/I": {
      id: "%3Bjq%7B",
      type: "select",
      select: null,
    },
    Description: {
      id: "%3C%5ERn",
      type: "rich_text",
      rich_text: [],
    },
    Priority: {
      id: "%3C_Wg",
      type: "status",
      status: {
        id: "3444e180-58ef-476c-baa8-c7345928edff",
        name: "Medium",
        color: "green",
      },
    },
    Context: {
      id: "%3D%3CgR",
      type: "select",
      select: null,
    },
    End: {
      id: "%3D%40nF",
      type: "button",
      button: {},
    },
    "Smart List (Formula)": {
      id: "%3FQOS",
      type: "formula",
      formula: {
        type: "string",
        string: "Inbox",
      },
    },
    Completed: {
      id: "%40%3E%5DE",
      type: "date",
      date: null,
    },
    Sessions: {
      id: "%40%7Dyo",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "Recur Interval": {
      id: "G~K%3B",
      type: "number",
      number: null,
    },
    "Time Tracked (Mins)": {
      id: "HUrB",
      type: "formula",
      formula: {
        type: "number",
        number: 0,
      },
    },
    "Parent Task": {
      id: "HebF",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "Sub-Task Sorter": {
      id: "IoEC",
      type: "formula",
      formula: {
        type: "string",
        string: "1 - hello from task api - 1",
      },
    },
    URL: {
      id: "KV~P",
      type: "url",
      url: null,
    },
    "Due Stamp (Parent)": {
      id: "MAIz",
      type: "formula",
      formula: {
        type: "number",
        number: 4938054840000,
      },
    },
    "Localization Key": {
      id: "MI%3A%60",
      type: "formula",
      formula: {
        type: "string",
        string:
          "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,Day(s),Week(s),Month(s),Year(s),Month(s) on the Last Day,Month(s) on the First Weekday,Month(s) on the Last Weekday,Nth Weekday of Month,To Do,Doing,Done",
      },
    },
    "Edited Stamp (Parent)": {
      id: "MQwR",
      type: "formula",
      formula: {
        type: "number",
        number: 1782369960000,
      },
    },
    "Notes ": {
      id: "Mkmq",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "Recur Unit": {
      id: "NE%3Em",
      type: "select",
      select: null,
    },
    "Wait Date": {
      id: "OHiw",
      type: "date",
      date: null,
    },
    Snooze: {
      id: "PFqf",
      type: "date",
      date: null,
    },
    "Smart List": {
      id: "PIZR",
      type: "select",
      select: null,
    },
    Start: {
      id: "R%3Aii",
      type: "button",
      button: {},
    },
    Place: {
      id: "RMIr",
      type: "place",
      place: null,
    },
    "Project Active": {
      id: "TQs%5B",
      type: "formula",
      formula: {
        type: "string",
        string: null,
      },
    },
    "Edited by": {
      id: "V%7CDL",
      type: "last_edited_by",
      last_edited_by: {
        object: "user",
        id: "1e6d872b-594c-8108-81f4-00026f5c37ec",
        name: "Ozen Fernandes",
        avatar_url:
          "https://s3-us-west-2.amazonaws.com/public.notion-static.com/5ec54d4d-614a-40ab-a544-cba11d8eb401/my-notion-face-portrait.png",
        type: "person",
        person: {
          email: "ozenfernandes@gmail.com",
        },
      },
    },
    "My Day Label": {
      id: "ZAUd",
      type: "formula",
      formula: {
        type: "string",
        string: "My Day",
      },
    },
    "Shopping List": {
      id: "%5CGGk",
      type: "checkbox",
      checkbox: false,
    },
    "Next Due": {
      id: "%5EKYS",
      type: "formula",
      formula: {
        type: "string",
        string: null,
      },
    },
    Days: {
      id: "_%3CZn",
      type: "multi_select",
      multi_select: [],
    },
    Edited: {
      id: "aOtK",
      type: "last_edited_time",
      last_edited_time: "2026-06-25T06:46:00.000Z",
    },
    Location: {
      id: "c%3Fs%3D",
      type: "select",
      select: null,
    },
    People: {
      id: "d%40rW",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "Snooze (Parent)": {
      id: "eXiq",
      type: "formula",
      formula: {
        type: "string",
        string: null,
      },
    },
    Occurrences: {
      id: "fNZa",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "Time Tracking Status": {
      id: "fR%60Y",
      type: "formula",
      formula: {
        type: "string",
        string: "Not Tracking",
      },
    },
    "Wait (Parent)": {
      id: "i%7B%7DZ",
      type: "formula",
      formula: {
        type: "string",
        string: null,
      },
    },
    "Current Session": {
      id: "jYRM",
      type: "formula",
      formula: {
        type: "string",
        string: null,
      },
    },
    Project: {
      id: "jbTO",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "Created by": {
      id: "kCM%3A",
      type: "created_by",
      created_by: {
        object: "user",
        id: "1e6d872b-594c-8108-81f4-00026f5c37ec",
        name: "Ozen Fernandes",
        avatar_url:
          "https://s3-us-west-2.amazonaws.com/public.notion-static.com/5ec54d4d-614a-40ab-a544-cba11d8eb401/my-notion-face-portrait.png",
        type: "person",
        person: {
          email: "ozenfernandes@gmail.com",
        },
      },
    },
    Due: {
      id: "lQh%3C",
      type: "date",
      date: null,
    },
    Tag: {
      id: "mGqT",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "My Day": {
      id: "musx",
      type: "checkbox",
      checkbox: false,
    },
    "Parent Smart List": {
      id: "nG%7CY",
      type: "rollup",
      rollup: {
        type: "array",
        array: [],
        function: "show_original",
      },
    },
    Status: {
      id: "oHKB",
      type: "status",
      status: {
        id: "0bffdb92-72e3-4d18-9974-245d59e47373",
        name: "To Do",
        color: "red",
      },
    },
    Energy: {
      id: "pjt_",
      type: "select",
      select: null,
    },
    "Blocked by": {
      id: "pmBG",
      type: "relation",
      relation: [],
      has_more: false,
    },
    Phase: {
      id: "qhZU",
      type: "select",
      select: null,
    },
    "Due Timestamp": {
      id: "rfZd",
      type: "formula",
      formula: {
        type: "number",
        number: 4938054840000,
      },
    },
    "Time Tracked": {
      id: "szlD",
      type: "formula",
      formula: {
        type: "string",
        string: "00:00:00",
      },
    },
    "Project Area": {
      id: "u%40SZ",
      type: "rollup",
      rollup: {
        type: "array",
        array: [],
        function: "show_original",
      },
    },
    "Sub-Tasks": {
      id: "uF_f",
      type: "relation",
      relation: [],
      has_more: false,
    },
    "Parent Project": {
      id: "vTd_",
      type: "rollup",
      rollup: {
        type: "array",
        array: [],
        function: "show_original",
      },
    },
    Created: {
      id: "z%3AKE",
      type: "created_time",
      created_time: "2026-06-22T17:15:00.000Z",
    },
    Assignee: {
      id: "%7BTzK",
      type: "people",
      people: [
        {
          object: "user",
          id: "1e6d872b-594c-8108-81f4-00026f5c37ec",
          name: "Ozen Fernandes",
          avatar_url:
            "https://s3-us-west-2.amazonaws.com/public.notion-static.com/5ec54d4d-614a-40ab-a544-cba11d8eb401/my-notion-face-portrait.png",
          type: "person",
          person: {
            email: "ozenfernandes@gmail.com",
          },
        },
      ],
    },
    "Meta Labels": {
      id: "%7DAYc",
      type: "formula",
      formula: {
        type: "string",
        string: "",
      },
    },
    Blocking: {
      id: "%7Do%5Cg",
      type: "relation",
      relation: [],
      has_more: false,
    },
    Name: {
      id: "title",
      type: "title",
      title: [
        {
          type: "text",
          text: {
            content: "Hello From Task API",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Hello From Task API",
          href: null,
        },
      ],
    },
  },
  url: "https://app.notion.com/p/Hello-From-Task-API-3874f0d949c180ddb4cfd87a7e6b8c29",
  public_url: null,
  developer_survey:
    "https://notionup.typeform.com/to/bllBsoI4?utm_source=postman",
  request_id: "32f388ed-4ee0-4295-910f-08a43b5fbcff",
};
