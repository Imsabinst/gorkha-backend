import mongoose, { Document } from "mongoose";

export type HomepageDocument = Document & {
  banner: string[];
  about: string[];
  dining_experience: string[];
  quotation: string[];
  explore_experience: string[];
  contact: string[];
  event: string[];
  gallery: string[];
};




const HomepageSchema = new mongoose.Schema(

    
);

export default mongoose.model<HomepageDocument>("Homepage", HomepageSchema);
