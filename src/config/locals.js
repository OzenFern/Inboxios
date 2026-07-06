import { APP } from "./app.js";
import { ROUTES } from "./routes.js";
import { STATUS } from "./properties.js";
import { formatDate } from "../utils/formatDate.js";
import { BUTTON_LABELS } from "./labels.js";
import { MESSAGES } from "./queryParams.js";

export default function setLocals(app) {
  app.locals.APP = APP;
  app.locals.ROUTES = ROUTES;
  app.locals.STATUS = STATUS;
  app.locals.BUTTON_LABELS = BUTTON_LABELS;
  app.locals.formatDate = formatDate;
  app.locals.ERROR = MESSAGES.ERROR;
}
