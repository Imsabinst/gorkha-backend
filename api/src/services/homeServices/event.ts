import EventSection, {
  EventSectionDocument,
} from "../../models/home/EventSection";
import { NotFoundError } from "../../helpers/apiError";

const save = async (
  eventSection: EventSectionDocument
): Promise<EventSectionDocument> => {
  return eventSection.save();
};

const findAll = async (): Promise<EventSectionDocument[]> => {
  return EventSection.find();
};

const updateEventSection = async (
  eventSectionId: string,
  update: Partial<EventSectionDocument>
): Promise<EventSectionDocument | null> => {
  const foundEventSection = await EventSection.findByIdAndUpdate(
    eventSectionId,
    update,
    {
      new: true,
    }
  );

  if (!foundEventSection) {
    throw new NotFoundError(`Event Section ${eventSectionId} not found`);
  }

  return foundEventSection;
};

export default {
  save,
  findAll,
  updateEventSection,
};
