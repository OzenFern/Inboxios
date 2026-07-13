import { ROUTE_PARAMS } from "../config/routeParams.js";
import { MESSAGES, QUERY_PARAMS } from "../config/queryParams.js";

// This function only works, when the ejs file name has the same name as the error code
export async function showError(req, res) {
  res.render(req.params[ROUTE_PARAMS.ERROR], {
    [QUERY_PARAMS.MESSAGE]: MESSAGES.ERROR,
  });
}
