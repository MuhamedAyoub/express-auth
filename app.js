//TODO  start Importing
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import authRoute from "./routes/auth.js";
import homeRoute from "./routes/home.js";
import { resolve } from "path";
import mongoDbStore from "express-session";
//TODO  End Importing
const app = express();
const mongoStore = mongoDbStore(session);
//!  Start Middleware
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
const __dire = resolve("public");
app.use(express.static(__dire));
app.use(authRoute);
app.use(homeRoute);
//!  End Middleware
/*add session*/
const mongo_uri =
  "mongodb+srv://mohamed:bbbb45@cluster0.nwi1e0p.mongodb.net/session";
const store = new mongoStore({
  uri: mongo_uri,
  collection: "sessions",
});
app.use(
  session({
    secret: "hello@world",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
//data base connect

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("CONNECT TO DATABASE...");
    app.listen(3500, () => console.log("Run on the port  3500"));
  })
  .catch((err) => console.log(err));
