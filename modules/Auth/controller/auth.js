import userModel from "../../../DB/Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, password, cPassword, email, age } = req.body;
    if (password === cPassword) {
      const user = await userModel.findOne({ email });
      if (user) {
        res.json({ message: "email already exist" });
      } else {
        const hashedPassword = await bcrypt.hash(
          password,
          +process.env.saltRounds
        );
        console.log(hashedPassword);
        const newUser = new userModel({
          firstName,
          lastName,
          age,
          email,
          password: hashedPassword,
        });
        const saveduser = await newUser.save();
        res.json({ message: "Done", saveduser });
      }
    } else {
      res.json({ message: "password doesn't match cpassword" });
    }
  } catch (error) {
    res.json({ error });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        { username: user.firstName + " " + user.lastName, email: user.email , id:user._id},
        process.env.tokenSignature, {expiresIn:'1hr'}
      );
      res.json({ message: "Done", token });
    } else {
      res.json({ message: "In-valid Account {password}" });
    }
  } else {
    res.json({ message: "In-valid Account {email}" });
  }
};
