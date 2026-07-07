import { $ } from "../utils/selector.js";
import { on } from "../utils/eventListener.js";

on($("#retry-btn"), "click", () => {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "/";
  }
});
