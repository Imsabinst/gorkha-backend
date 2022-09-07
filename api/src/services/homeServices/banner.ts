import Banner, { BannerDocument } from "../../models/home/BannerSection";
import { NotFoundError } from "../../helpers/apiError";

const save = async (banner: BannerDocument): Promise<BannerDocument> => {
  return banner.save();
};

const findAll = async (): Promise<BannerDocument[]> => {
  return Banner.find();
};

const updateBanner = async (
  bannerId: string,
  update: Partial<BannerDocument>
): Promise<BannerDocument | null> => {
  const foundBanner = await Banner.findByIdAndUpdate(bannerId, update, {
    new: true,
  });

  if (!foundBanner) {
    throw new NotFoundError(`Banner ${bannerId} not found`);
  }

  return foundBanner;
};

export default {
  save,
  findAll,
  updateBanner,
};
