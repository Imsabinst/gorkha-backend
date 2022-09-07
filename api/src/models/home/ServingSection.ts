import mongoose, { Document } from "mongoose";

export type ServingSectionDocument = Document & {
  title: string;
  details: [];
};

const DetailSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const ServingSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    details: [DetailSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ServingSectionDocument>(
  "ServingSection",
  ServingSectionSchema
);
