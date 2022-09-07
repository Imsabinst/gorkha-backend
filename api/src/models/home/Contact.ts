import mongoose, { Document } from "mongoose";

export type ContactDocument = Document & {
  name: string;
  email: string;
  description: string;
  status: boolean;
};

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    staus: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ContactDocument>("Contact", ContactSchema);
