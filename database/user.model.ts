import { model, models, Schema, Document } from "mongoose";

export interface IUser {
  name: string;
  userName: string;
  email: string;
  bio?: string;
  image?: string;
  location?: string;
  portofolio?: string;
  reputation?: number;
}
export interface IUserDoc extends IUser, Document {}
const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String },
    location: { type: String },
    portofolio: { type: String },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models?.user || model<IUser>("User", UserSchema);

export default User;
