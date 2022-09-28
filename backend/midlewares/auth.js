import jwt from "jsonwebtoken";
import userModel from "../DB/Models/User.js";

export const auth = () => {
  return async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (authorization.startsWith(process.env.BearerKey)) {
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.tokenSignature);
        if (decodedToken && decodedToken.id) {
          const user = await userModel
            .findById(decodedToken.id)
            .select("email");
          if (user) {
            req.authUser = user;
            next();
          } else {
            res.json({ message: "In-valid user id from token" });
          }
        } else {
          res.json({ message: "In-valid Token" });
        }
      } else {
        res.json({ message: "In-valied Bearer Key " });
      }
    } catch (error) {
      res.json({ message: "catch error", error });
    }
  };
};
