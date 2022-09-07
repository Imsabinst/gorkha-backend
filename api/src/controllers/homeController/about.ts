import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import About from "../../models/home/AboutSection";
import AboutServices from "../../services/homeServices/about";

//GET all abouts
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await AboutServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /about
export const createAboutSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { main_heading, main_description, details } = req.body;
    const about = new About({
      main_heading,
      main_description,
      details,
    });
    await AboutServices.save(about);
    res.json(about);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /AboutSection
export const updateAboutSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const aboutSectionId = req.params.aboutSectionId;
    const updatedAboutSection = await AboutServices.updateAboutSection(
      aboutSectionId,
      update
    );
    res.json(updatedAboutSection);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
