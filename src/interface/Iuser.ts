import { Document } from "mongoose";

interface Iuser extends Document {
  _id: string;

  username: string;
  email: string;
  password: string;
}
export default Iuser;
