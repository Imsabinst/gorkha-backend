import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import Explore from "../../models/home/ExploreSection";
import ExploreServices from "../../services/homeServices/explore";

//GET all Explore
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ExploreServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /Explore
export const createExploreSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, details } = req.body;
    const explore = new Explore({
      title,
      description,
      details,
    });
    await ExploreServices.save(explore);
    res.json(explore);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /Explore Section
export const updateExploreSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const exploreSectionId = req.params.exploreSectionId;
    const updatedExploreSection = await ExploreServices.updateExploreSection(
      exploreSectionId,
      update
    );
    res.json(updatedExploreSection);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
