import { $$ } from "./utils/selector.js";
import { on } from "./utils/eventListener.js";

on($$(".btn-close"), "click", function () {
  const alertBox = this.closest(".alert-box");

  if (alertBox) {
    // Add .fade-out to alertBox for fade out effect
    alertBox.classList.add("fade-out");

    setTimeout(() => {
      alertBox.remove();
    }, 600); // Match the delay with the tranistion for .alert
  }
});
