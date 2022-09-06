import express from "express";

import {
  createBanner,
  findAll,
  updateBanner,
  deleteBanner,
} from "../controllers/home/banner";

const router = express.Router();

// Every path we define here will get /api/v1/banners prefix
router.get("/", findAll);
router.post("/", createBanner);
router.put("/:bannerId", updateBanner);
router.delete("/:bannerId", deleteBanner);

export default router;
