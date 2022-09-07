import Contact, { ContactDocument } from "../../models/home/Contact";
import { NotFoundError } from "../../helpers/apiError";

const save = async (contact: ContactDocument): Promise<ContactDocument> => {
  return contact.save();
};

const findAll = async (): Promise<ContactDocument[]> => {
  return Contact.find();
};

const updateContact = async (
  contactId: string,
  update: Partial<ContactDocument>
): Promise<ContactDocument | null> => {
  const foundBanner = await Contact.findByIdAndUpdate(contactId, update, {
    new: true,
  });

  if (!foundBanner) {
    throw new NotFoundError(`Contact ${contactId} not found`);
  }

  return foundBanner;
};

export default {
  save,
  findAll,
  updateContact,
};
