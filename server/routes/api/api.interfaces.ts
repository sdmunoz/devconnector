import { Request } from 'express';

export interface IGetUserAuthBodyRequest extends Request {
  _id: string;
  name: string;
  email: string;
  password: string;
  company: string;
  website: string;
  location: string;
  bio: string;
  status: string;
  githubusername: string;
  skills: string;
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  title: string;
  from: string;
  to: string;
  current: string;
  description: string;
  school: string;
  degree: string;
  fieldofstudy: string;
}

export interface IGetUserAuthInfoRequest extends Request {
  user: {
    id: string;
  };
}
