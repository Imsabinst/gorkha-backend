import ServingSection, {
  ServingSectionDocument,
} from "../../models/home/ServingSection";
import { NotFoundError } from "../../helpers/apiError";

const save = async (
  servingSection: ServingSectionDocument
): Promise<ServingSectionDocument> => {
  return servingSection.save();
};

const findAll = async (): Promise<ServingSectionDocument[]> => {
  return ServingSection.find();
};

const updateServingSection = async (
  servingSectionId: string,
  update: Partial<ServingSectionDocument>
): Promise<ServingSectionDocument | null> => {
  const foundServingSection = await ServingSection.findByIdAndUpdate(
    servingSectionId,
    update,
    {
      new: true,
    }
  );

  if (!foundServingSection) {
    throw new NotFoundError(`Serving Section ${servingSectionId} not found`);
  }

  return foundServingSection;
};

export default {
  save,
  findAll,
  updateServingSection,
};
