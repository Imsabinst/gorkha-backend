import DiningSection, {
  DiningSectionDocument,
} from "../../models/home/DiningSection";
import { NotFoundError } from "../../helpers/apiError";

const save = async (
  diningSection: DiningSectionDocument
): Promise<DiningSectionDocument> => {
  return diningSection.save();
};

const findAll = async (): Promise<DiningSectionDocument[]> => {
  return DiningSection.find();
};

const updateDiningSection = async (
  diningSectionId: string,
  update: Partial<DiningSectionDocument>
): Promise<DiningSectionDocument | null> => {
  const foundDiningSection = await DiningSection.findByIdAndUpdate(
    diningSectionId,
    update,
    {
      new: true,
    }
  );

  if (!foundDiningSection) {
    throw new NotFoundError(`Dining Exp Section ${diningSectionId} not found`);
  }

  return foundDiningSection;
};

export default {
  save,
  findAll,
  updateDiningSection,
};
