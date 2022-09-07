import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../../helpers/apiError";
import Quotation from "../../models/home/Quotation";
import QuotationServices from "../../services/homeServices/quotation";

//GET all Quotation
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await QuotationServices.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// POST /Quotation
export const createQuotation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, status } = req.body;
    const quotation = new Quotation({
      title,
      status,
    });
    await QuotationServices.save(quotation);
    res.json(quotation);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//UPDATE /Quotation
export const updateQuotation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const quotationId = req.params.quotationId;
    const updatedQuotation = await QuotationServices.updateQuotation(
      quotationId,
      update
    );
    res.json(updatedQuotation);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
