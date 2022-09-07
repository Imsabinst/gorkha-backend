import express from "express";

import {
  createBanner,
  findAll,
  updateBanner,
} from "../controllers/homeController/banner";

const router = express.Router();

// Every path we define here will get /api/v1/banners prefix
router.get("/", findAll);
router.post("/", createBanner);
router.put("/:bannerId", updateBanner);

export default router;
