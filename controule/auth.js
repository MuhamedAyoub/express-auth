import User from "../models/User.js";
export const postLogin = async (req, res, next) => {
  try {
    const user = await User.find(req.body);
    if (user) {
      res.status(200).json(user);
      res.redirect("/welcom");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};

export const postSignup = async (req, res, next) => {
  try {
    await User.create(req.body);
    res.status(201).send("user was created .. ");
  } catch (ex) {
    console.error(ex);
    res.status(500).send("Error");
  }
};
export const getLogin = (req, res, next) => {
  try {
    res.render("/auth/login", {
      path: "/login",
      pageTitle: "LogIn",
      isAuthenticated: false,
    });
  } catch (ex) {
    console.log(ex);
  }
};
