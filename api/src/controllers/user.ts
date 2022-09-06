import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
//const CryptoJS = require("crypto-js");
import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { json } from "stream/consumers";

//user login
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (await User.findOne({ email: req.body.email })) as any;
    !user && res.status(401).json("Wrong Credentials");
    console.log(user, "this is user");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC as any
    );

    const oldpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    console.log(oldpassword, "hello again");
    console.log(req.body.password, "requst");
    oldpassword !== req.body.password &&
      res.status(401).json("Wrong Credentials: Password incorrect");

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC as any,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc as any;
    res.status(200).json({ ...others, accessToken });
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};
