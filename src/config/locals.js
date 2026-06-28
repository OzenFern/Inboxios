import { ROUTES } from "./routes.js";

export default function setLocals(app) {
  app.locals.APP = APP;
  app.locals.ROUTES = ROUTES;
}

const APP = {
  NAME: "Inboxios",
  VERSION: process.env.npm_package_version,
  GITHUB: "https://github.com/OzenFern/Inboxios",
  DOCS: "https://github.com/OzenFern/Inboxios#readme",
};
