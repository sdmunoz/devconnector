import { Request } from 'express';

export interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export interface IGetUserAuthBodyRequest extends Request {
  name: string;
  email: string;
  password: string;
}

export interface IGetUserAuthInfoRequest extends Request {
  user: {
    id: string;
  };
}
