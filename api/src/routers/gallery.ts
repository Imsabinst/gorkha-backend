import express from "express";

import {
  createGallery,
  findAll,
  updateGallery,
} from "../controllers/homeController/gallery";

const router = express.Router();

// Every path we define here will get /api/v1/gallerysection prefix
router.get("/", findAll);
router.post("/", createGallery);
router.put("/:galleryId", updateGallery);

export default router;
