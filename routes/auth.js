import express from "express";
import { postLogin, postSignup, getLogin } from "../controule/auth.js";
const router = express.Router();

router.get("login", getLogin);
router.post("/login", postLogin);
router.post("/signup", postSignup);
export default router;
