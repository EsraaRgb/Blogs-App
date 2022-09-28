import userModel from "../../../DB/Models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel
      .find()
      .select("firstName lastName email age ");
    res.json({ users });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, age, password } = req.body;
    const user = await userModel.findByIdAndUpdate(
      req.authUser._id,
      { firstName, lastName, email, age, password },
      { new: true }
    );
    res.json({ user });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.authUser._id, {
      new: true,
    });
    res.json({ user });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
