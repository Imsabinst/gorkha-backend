import express from "express";

import {
  createDiningSection,
  findAll,
  updateDiningSection,
} from "../controllers/homeController/dining";

const router = express.Router();

// Every path we define here will get /api/v1/diningsection prefix
router.get("/", findAll);
router.post("/", createDiningSection);
router.put("/:diningSectionId", updateDiningSection);

export default router;
