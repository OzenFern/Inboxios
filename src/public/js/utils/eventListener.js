export function on(element, eventType, callback) {
  if (typeof element.forEach === "function") {
    element.forEach((el) => el.addEventListener(eventType, callback));
  } else {
    element.addEventListener(eventType, callback);
  }
}
