import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import Gallery from "../../models/home/GallerySection";
import GalleryServices from "../../services/homeServices/gallery";

//GET all Gallery
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await GalleryServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /Gallery
export const createGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { images } = req.body;
    const quotation = new Gallery({
      images,
    });
    await GalleryServices.save(quotation);
    res.json(quotation);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /Gallery
export const updateGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const galleryId = req.params.galleryId;
    const updatedGallery = await GalleryServices.updateGallerySection(
      galleryId,
      update
    );
    res.json(updatedGallery);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
