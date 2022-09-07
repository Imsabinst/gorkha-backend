import express from "express";

import {
  createAboutSection,
  findAll,
  updateAboutSection,
} from "../controllers/homeController/about";

const router = express.Router();

// Every path we define here will get /api/v1/aboutsection prefix
router.get("/", findAll);
router.post("/", createAboutSection);
router.put("/:aboutSectionId", updateAboutSection);

export default router;
