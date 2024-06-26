import mongoose, { Document } from "mongoose";

export type BannerDocument = Document & {
  main_heading: string;
  sub_heading: string;
  background_image: string;
  status: boolean;
};

const BannerSchema = new mongoose.Schema(
  {
    main_heading: {
      type: String,
    },
    sub_heading: {
      type: String,
    },

    background_image: {
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

export default mongoose.model<BannerDocument>("Banner", BannerSchema);
