import express from "express";

import {
  createContact,
  findAll,
  updateContact,
} from "../controllers/homeController/contact";

const router = express.Router();

// Every path we define here will get /api/v1/diningsection prefix
router.get("/", findAll);
router.post("/", createContact);
router.put("/:contactId", updateContact);

export default router;
