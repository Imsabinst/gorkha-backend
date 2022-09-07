import Gallery, {
  GallerySectionDocument,
} from "../../models/home/GallerySection";
import { NotFoundError } from "../../helpers/apiError";

const save = async (
  gallery: GallerySectionDocument
): Promise<GallerySectionDocument> => {
  return gallery.save();
};

const findAll = async (): Promise<GallerySectionDocument[]> => {
  return Gallery.find();
};

const updateGallerySection = async (
  galleryId: string,
  update: Partial<GallerySectionDocument>
): Promise<GallerySectionDocument | null> => {
  const foundGallerySection = await Gallery.findByIdAndUpdate(
    galleryId,
    update,
    {
      new: true,
    }
  );

  if (!foundGallerySection) {
    throw new NotFoundError(`Gallery Sectin ${galleryId} not found`);
  }

  return foundGallerySection;
};

export default {
  save,
  findAll,
  updateGallerySection,
};
