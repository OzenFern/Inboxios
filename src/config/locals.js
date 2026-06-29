import { APP } from "./app.js";
import { ROUTES } from "./routes.js";
import { STATUS } from "./properties.js";

export default function setLocals(app) {
  app.locals.APP = APP;
  app.locals.ROUTES = ROUTES;
  app.locals.STATUS = STATUS;
}
