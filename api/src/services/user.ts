import { UserDocument } from "../models/User";

/* const create = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
}; */

const login = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

export default {
  login,
};
