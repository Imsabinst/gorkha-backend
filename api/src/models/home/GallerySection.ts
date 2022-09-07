import mongoose, { Document } from "mongoose";

export type GallerySectionDocument = Document & {
  images: [];
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

const GallerySectionSchema = new mongoose.Schema(
  {
    images: [DetailSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<GallerySectionDocument>(
  "GallerySection",
  GallerySectionSchema
);
