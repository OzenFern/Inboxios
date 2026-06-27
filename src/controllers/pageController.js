export function home(req, res) {
  res.render("index", {
    message: req.query.message,
    title: req.query.title,
  });
}

export function about(req, res) {
  res.render("about");
}
