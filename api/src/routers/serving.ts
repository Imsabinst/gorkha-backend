import express from "express";

import {
  createServingSection,
  findAll,
  updateServingSection,
} from "../controllers/homeController/serving";

const router = express.Router();

// Every path we define here will get /api/v1/servingsection prefix
router.get("/", findAll);
router.post("/", createServingSection);
router.put("/:servingSectionId", updateServingSection);

export default router;
