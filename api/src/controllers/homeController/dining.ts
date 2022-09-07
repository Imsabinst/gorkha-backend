import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import Dining from "../../models/home/DiningSection";
import DiningServices from "../../services/homeServices/dining";

//GET all Dining
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await DiningServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /Dining
export const createDiningSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, details } = req.body;
    const dining = new Dining({
      title,
      description,
      details,
    });
    await DiningServices.save(dining);
    res.json(dining);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /DiningSection
export const updateDining = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const diningSectionId = req.params.diningSectionId;
    const updatedDiningSection = await DiningServices.updateDiningSection(
      diningSectionId,
      update
    );
    res.json(updatedDiningSection);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
