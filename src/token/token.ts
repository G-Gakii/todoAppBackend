import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN as string, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
export default generateToken;
