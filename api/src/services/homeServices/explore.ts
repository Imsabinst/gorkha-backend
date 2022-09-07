import ExploreSection, {
  ExploreSectionDocument,
} from "../../models/home/ExploreSection";
import { NotFoundError } from "../../helpers/apiError";

const save = async (
  exploreSection: ExploreSectionDocument
): Promise<ExploreSectionDocument> => {
  return exploreSection.save();
};

const findAll = async (): Promise<ExploreSectionDocument[]> => {
  return ExploreSection.find();
};

const updateExploreSection = async (
  exploreSectionId: string,
  update: Partial<ExploreSectionDocument>
): Promise<ExploreSectionDocument | null> => {
  const foundExploreSection = await ExploreSection.findByIdAndUpdate(
    exploreSectionId,
    update,
    {
      new: true,
    }
  );

  if (!foundExploreSection) {
    throw new NotFoundError(`Dining Exp Section ${exploreSectionId} not found`);
  }

  return foundExploreSection;
};

export default {
  save,
  findAll,
  updateExploreSection,
};
