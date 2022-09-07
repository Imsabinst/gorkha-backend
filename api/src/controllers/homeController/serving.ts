import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import Serving from "../../models/home/ServingSection";
import ServingServices from "../../services/homeServices/serving";

//GET all Servings
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ServingServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /Serving
export const createServingSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, details } = req.body;
    const serving = new Serving({
      title,
      details,
    });
    await ServingServices.save(serving);
    res.json(serving);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /ServingSection
export const updateServingSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const servingSectionId = req.params.servingSectionId;
    const updatedServingSection = await ServingServices.updateServingSection(
      servingSectionId,
      update
    );
    res.json(updatedServingSection);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
