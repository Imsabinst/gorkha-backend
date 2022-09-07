import express from "express";
// import lusca from 'lusca' will be used later
import dotenv from "dotenv";

import bannerRouter from "./routers/banner";
import userRouter from "./routers/user";
import aboutSectionRouter from "./routers/about";
import servingSectionRouter from "./routers/serving";
import diningSectionRouter from "./routers/dining";
import quotationRouter from "./routers/quotation";
import exploreSectionRouter from "./routers/explore";

import apiContentTypes from "./middlewares/apiContentTypes";
import apiErrorHandler from "./middlewares/apiErrorHandler";

dotenv.config({ path: ".env" });
const app = express();
const cors = require("cors");

// Express configuration
app.set("port", process.env.PORT || 5000);

// Global middleware
app.use(apiContentTypes);
app.use(express.json());
app.use(cors());

// Set up routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/banners", bannerRouter);
app.use("/api/v1/aboutsection", aboutSectionRouter);
app.use("/api/v1/servingsection", servingSectionRouter);
app.use("/api/v1/diningsection", diningSectionRouter);
app.use("/api/v1/quotations", quotationRouter);
app.use("/api/v1/exploresection", exploreSectionRouter);

// Custom API error handler
app.use(apiErrorHandler);

export default app;
