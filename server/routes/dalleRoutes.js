import express from "express";

import { imageGenerator, messageFromDalle } from "../controllers/dalleController.js";

const router = express.Router();

router.get('/', messageFromDalle);

router.post('/', imageGenerator);

export default router;