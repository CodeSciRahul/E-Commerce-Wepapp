import User from "../models/User.js";

export class UserService {

  //register User
  async registerUser(userDetail) {

    const {username,email,password} = userDetail;
    if(!(username && email && password)) throw new Error("require all field");

    const existUser = await User.findOne({ email: userDetail.email });
    if (existUser) {
      console.log("user exist!\n", existUser);
      throw new Error("User already exist!");
    }

    const newUser = new User(userDetail);
    const savedUser = await newUser.save();

    if (!savedUser) throw new Error("Error register new user!");
    return savedUser;
  }

  //get user detail
  async getuserDetail(userId) {
    //getting  user detail
    const user = await User.findById(userId)
    
    if(!user) throw new Error("can not get userdata!")
    return user;
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
