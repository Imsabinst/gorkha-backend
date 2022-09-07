import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import Event from "../../models/home/EventSection";
import EventServices from "../../services/homeServices/event";

//GET all Dining
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await EventServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /Dining
export const createEventSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image, description, date, status } = req.body;
    const event = new Event({
      name,
      image,
      description,
      date,
      status,
    });
    await EventServices.save(event);
    res.json(event);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /Event section
export const updateEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const eventSectionId = req.params.eventSectionId;
    const updateEvent = await EventServices.updateEventSection(
      eventSectionId,
      update
    );
    res.json(updateEvent);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
