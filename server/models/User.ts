import mongoose, { Schema, Model, Document } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
  date: string;
}

export type UserDocument = IUser & Document;

const UserSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User: Model<UserDocument> = mongoose.model('user', UserSchema);

export default User;
