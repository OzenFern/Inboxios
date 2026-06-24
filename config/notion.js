import axios from "axios";

const AUTH_TOKEN = process.env.NOTION_ACCESS_TOKEN;

if (!AUTH_TOKEN) throw new Error("Notion Authentication Token is required");

export const notion = axios.create({
  baseURL: "https://api.notion.com/v1",
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    "Notion-Version": "2026-03-11",
    "Content-Type": "application/json",
  },
});
