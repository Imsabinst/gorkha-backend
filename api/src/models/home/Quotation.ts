import mongoose, { Document } from "mongoose";

export type QuotationDocument = Document & {
  title: string;
  status: boolean;
};

const QuotationSchema = new mongoose.Schema(
  {
    title: {
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

export default mongoose.model<QuotationDocument>("Quotation", QuotationSchema);
