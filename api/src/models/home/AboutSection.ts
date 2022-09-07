import mongoose, { Document } from "mongoose";

export type AboutSectionDocument = Document & {
  main_heading: string;
  main_description: string;
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

const AboutSectionSchema = new mongoose.Schema(
  {
    main_heading: {
      type: String,
    },
    main_description: {
      type: String,
    },

    details: [DetailSchema],
  },

  {
    timestamps: true,
  }
);

export default mongoose.model<AboutSectionDocument>(
  "AboutSection",
  AboutSectionSchema
);
