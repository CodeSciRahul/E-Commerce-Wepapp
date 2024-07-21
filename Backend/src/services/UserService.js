import User from "../models/User.js";
import { Error } from "mongoose";

export class UserService {
  //register User
  async registerUser(userDetail) {
    const existUser = await User.findOne({ email: userDetail.email });
    if (existUser) {
      console.log("user exist!\n", existUser);
      throw new Error("User already exist!");
    }

    const newUser = new User(userDetail);
    const saveUser = await newUser.save();
    if (!saveUser) throw new Error("Error register new user!");
    return saveUser;
  }

  //get user detail
  async getUser(userId) {
    const userData = await User.findById(userId);
    if (!userData) throw new Error("User not exist!");
    return userData;
  }

  //update user detail
  async updateUser(userId, updateField) {
    const modifyUserDetail = await User.findByIdAndUpdate(
      userId,
      { $set: updateField },
      { new: true }
    );
    if (!modifyUserDetail) throw new Error("User not exist");
    return modifyUserDetail;
  }

  //delete user detail
  async deleteUser(userId) {
    const deleteUserDetail = await User.findByIdAndDelete(userId);
    if (!deleteUserDetail) throw new Error("User not exist!");
    return deleteUserDetail;
  }
}
