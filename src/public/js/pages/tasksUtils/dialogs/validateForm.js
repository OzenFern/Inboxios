import { $, on } from "../../../utils.js";

const form = $("#task-form");

const startInput = $("#startDate");
const endInput = $("#endDate");

function validateDates() {
  const start = startInput.value;
  const end = endInput.value;

  // Clear previous errors
  startInput.setCustomValidity("");
  endInput.setCustomValidity("");

  // End date requires a start date
  if (!start && end) {
    startInput.setCustomValidity(
      "Please select a start date before choosing an end date.",
    );

    return false;
  }

  // Start date must not be after end date
  if (start && end && new Date(start) > new Date(end)) {
    endInput.setCustomValidity(
      "End date must be later than or equal to the start date.",
    );

    return false;
  }

  return true;
}

// Keep the date pickers constrained
on(startInput, "change", () => {
  endInput.min = startInput.value || "";
  validateDates();
});

on(endInput, "change", () => {
  startInput.max = endInput.value || "";
  validateDates();
});

// Validate before submitting
on(form, "submit", (e) => {
  if (!validateDates()) {
    e.preventDefault();

    // Show browser validation popup
    form.reportValidity();
  }
});
