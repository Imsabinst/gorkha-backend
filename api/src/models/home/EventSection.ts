import mongoose, { Document } from "mongoose";

export type EventSectionDocument = Document & {
  name: string;
  image: string;
  description: string;
  eventDate: Date;
  status: boolean;
};

const EventSectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
    },
    staus: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<EventSectionDocument>(
  "EventSection",
  EventSectionSchema
);
