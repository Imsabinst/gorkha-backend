import mongoose, { Document } from "mongoose";

export type DiningSectionDocument = Document & {
  title: string;
  description: string;
  details: [];
};

const DetailSchema = new mongoose.Schema(
  {
    image: {
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

const DiningSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    details: [DetailSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<DiningSectionDocument>(
  "DiningSection",
  DiningSectionSchema
);
