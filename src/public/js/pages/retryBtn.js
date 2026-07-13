import { on, $ } from "../utils.js";

on($("#retry-btn"), "click", () => {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "/";
  }
});
