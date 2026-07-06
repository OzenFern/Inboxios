import { MESSAGES, QUERY_PARAMS } from "../config/queryParams.js";

// This function only works, when the ejs file name has the same name as the error code
export async function showError(req, res) {
  const error = req.path.slice(-3);
  console.log(error);
  res.render(error, {
    [QUERY_PARAMS.MESSAGE]: MESSAGES.ERROR,
  });
}
