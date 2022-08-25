export default (req, res, next) => {
  res.render("/home", {
    path: "/",
    pageTitle: "home",
  });
};
