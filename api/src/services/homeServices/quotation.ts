import Quotation, { QuotationDocument } from "../../models/home/Quotation";
import { NotFoundError } from "../../helpers/apiError";

const save = async (
  quotation: QuotationDocument
): Promise<QuotationDocument> => {
  return quotation.save();
};

const findAll = async (): Promise<QuotationDocument[]> => {
  return Quotation.find();
};

const updateQuotation = async (
  quotaionId: string,
  update: Partial<QuotationDocument>
): Promise<QuotationDocument | null> => {
  const foundQuotaion = await Quotation.findByIdAndUpdate(quotaionId, update, {
    new: true,
  });

  if (!foundQuotaion) {
    throw new NotFoundError(`Quotaion ${quotaionId} not found`);
  }

  return foundQuotaion;
};

export default {
  save,
  findAll,
  updateQuotation,
};
