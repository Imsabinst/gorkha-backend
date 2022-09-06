import mongoose, { Document } from "mongoose";

export type AboutDocument = Document & {
  main_heading: string;
  main_description: string;
  detail: [];
  image: string;
  description: string;
};

const AboutSchema = new mongoose.Schema(
  {
    main_heading: {
      type: String,
    },
    main_description: {
      type: String,
    },

    detail: [
      {
        image: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<AboutDocument>("About", AboutSchema);
