import express from "express";

import {
  createQuotation,
  findAll,
  updateQuotation,
} from "../controllers/homeController/quotaion";

const router = express.Router();

// Every path we define here will get /api/v1/quotataion prefix
router.get("/", findAll);
router.post("/", createQuotation);
router.put("/:quotationId", updateQuotation);

export default router;
