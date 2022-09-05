import express from "express";
// import lusca from 'lusca' will be used later
import dotenv from "dotenv";

import bannerRouter from "./routers/banner";
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

// Set up routers
app.use("/api/v1/banners", bannerRouter);

// Custom API error handler
app.use(apiErrorHandler);

export default app;
