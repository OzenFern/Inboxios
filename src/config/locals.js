import { APP } from "./app.js";
import { ROUTES } from "./routes.js";

export default function setLocals(app) {
  app.locals.APP = APP;
  app.locals.ROUTES = ROUTES;
}
