import { QUERY_PARAMS } from "../config/queryParams.js";

export function home(req, res) {
  res.render("index", {
    [QUERY_PARAMS.MESSAGE]: req.query.message,
    [QUERY_PARAMS.TITLE]: req.query.title,
  });
}

export function about(req, res) {
  res.render("about");
}
