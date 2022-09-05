import errorHandler from "errorhandler";
import mongoose from "mongoose";
import app from "./app";
import logger from "./util/logger";

const MONGODB_URI_LOCAL = process.env["MONGODB_URI_LOCAL"] as string;
const mongoUrl = MONGODB_URI_LOCAL;

mongoose
  .connect(mongoUrl)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((err: Error) => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    process.exit(1);
  });

/**
 * Error Handler. Provides error handing middleware
   only use in development
 */
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

// Start Express server
app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
