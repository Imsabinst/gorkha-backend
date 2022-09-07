import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import Contact from "../../models/home/Contact";
import ContactServices from "../../services/homeServices/contact";

//GET all Dining
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ContactServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /Contact
export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, description, status } = req.body;
    const contact = new Contact({
      name,
      email,
      description,
      status,
    });
    await ContactServices.save(contact);
    res.json(contact);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /Contact
export const updateContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const contactId = req.params.contactId;
    const updatedContact = await ContactServices.updateContact(
      contactId,
      update
    );
    res.json(updatedContact);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
