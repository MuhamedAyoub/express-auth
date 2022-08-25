import express from "express";
import getHoume from "../controule/home.js";
const router = express.Router();

router.get("/", getHoume);

export default router;
