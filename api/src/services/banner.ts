import Banner, { BannerDocument } from "../models/Banner";
import { NotFoundError } from "../helpers/apiError";

const save = async (banner: BannerDocument): Promise<BannerDocument> => {
  return banner.save();
};

const findAll = async (): Promise<BannerDocument[]> => {
  return Banner.find();
};

const updateBanner = async (
  BannerId: string,
  update: Partial<BannerDocument>
): Promise<BannerDocument | null> => {
  const foundBanner = await Banner.findByIdAndUpdate(BannerId, update, {
    new: true,
  });

  if (!foundBanner) {
    throw new NotFoundError(`Banner ${BannerId} not found`);
  }

  return foundBanner;
};

const deleteBanner = async (
  bannerId: string
): Promise<BannerDocument | null> => {
  const foundBanner = Banner.findByIdAndDelete(bannerId);

  if (!foundBanner) {
    throw new NotFoundError(`Banner ${bannerId} not found`);
  }

  return foundBanner;
};

export default {
  save,
  findAll,
  updateBanner,
  deleteBanner,
};
