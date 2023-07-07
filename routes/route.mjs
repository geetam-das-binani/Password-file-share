import express from "express";
import { addData, getData, validatePassword } from "../api.mjs";
import { upload } from "../utils/uploads.mjs";
const router = express.Router();

router.post("/upload", upload.single("file"), addData);
router.route("/datafile/:id").get(getData).post(validatePassword);

export { router };
