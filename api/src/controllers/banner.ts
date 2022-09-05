import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../helpers/apiError";
import Banner from "../models/Banner";
import BannerServices from "../services/banner";

//GET all banners
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BannerServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /banner
export const createBanner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { main_heading, sub_heading, background_image } = req.body;
    const banner = new Banner({
      main_heading,
      sub_heading,
      background_image,
    });
    await BannerServices.save(banner);
    res.json(banner);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /Banner
export const updateBanner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const bannerId = req.params.bannerId;
    const updatedBanner = await BannerServices.updateBanner(bannerId, update);
    res.json(updatedBanner);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//DELETE /Banner
export const deleteBanner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BannerServices.deleteBanner(req.params.bannerId);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
