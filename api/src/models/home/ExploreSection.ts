import mongoose, { Document } from "mongoose";

export type ExploreSectionDocument = Document & {
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

const ExploreSectionSchema = new mongoose.Schema(
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

export default mongoose.model<ExploreSectionDocument>(
  "ExploreSection",
  ExploreSectionSchema
);
