import { test, expect } from "vitest";
import { validateDatabase } from "../utils/validateDatabase.js";

test("Valid database passes validation", () => {
  const dataSource = {
    properties: {
      Name: { type: "title" },
      Status: { type: "status" },
      Due: { type: "date" },
      Created: { type: "created_time" },
    },
  };
  expect(() => validateDatabase(dataSource)).not.toThrow();
});

test("Missing properties throw error", () => {
  const dataSource = {
    properties: {
      Name: { type: "title" },
      Due: { type: "date" },
      Created: { type: "created_time" },
    },
  };
  expect(() => validateDatabase(dataSource)).toThrow();
});

test("Throw error when type is invalid", () => {
  const dataSource = {
    properties: {
      Name: { type: "title" },
      Status: { type: "select" },
      Due: { type: "date" },
      Created: { type: "created_time" },
    },
  };
  expect(() => validateDatabase(dataSource)).toThrow();
});
