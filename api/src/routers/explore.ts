import express from "express";

import {
  createExploreSection,
  findAll,
  updateExploreSection,
} from "../controllers/homeController/explore";

const router = express.Router();

// Every path we define here will get /api/v1/diningsection prefix
router.get("/", findAll);
router.post("/", createExploreSection);
router.put("/:exploreSectionId", updateExploreSection);

export default router;
