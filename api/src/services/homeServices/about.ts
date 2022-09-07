import AboutSection, {
  AboutSectionDocument,
} from "../../models/home/AboutSection";
import { NotFoundError } from "../../helpers/apiError";

const save = async (
  aboutSection: AboutSectionDocument
): Promise<AboutSectionDocument> => {
  return aboutSection.save();
};

const findAll = async (): Promise<AboutSectionDocument[]> => {
  return AboutSection.find();
};

const updateAboutSection = async (
  aboutSectionId: string,
  update: Partial<AboutSectionDocument>
): Promise<AboutSectionDocument | null> => {
  const foundAboutSection = await AboutSection.findByIdAndUpdate(
    aboutSectionId,
    update,
    {
      new: true,
    }
  );

  if (!foundAboutSection) {
    throw new NotFoundError(`AboutSection ${aboutSectionId} not found`);
  }

  return foundAboutSection;
};

export default {
  save,
  findAll,
  updateAboutSection,
};
