import express from "express";

import {
  createEventSection,
  findAll,
  updateEvent,
} from "../controllers/homeController/event";

const router = express.Router();

// Every path we define here will get /api/v1/diningsection prefix
router.get("/", findAll);
router.post("/", createEventSection);
router.put("/:eventSectionId", updateEvent);

export default router;
