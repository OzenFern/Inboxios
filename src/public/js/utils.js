// querySelectors
export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

// EventListeners
export function on(element, eventType, callback) {
  if (typeof element.forEach === "function") {
    element.forEach((el) => el.addEventListener(eventType, callback));
  } else {
    element.addEventListener(eventType, callback);
  }
}
