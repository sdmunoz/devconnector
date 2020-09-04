import express, { Router } from 'express';
import getAuthUser from './get-auth-user';
import postAuthUser from './post-auth-user';

const authRouter: Router = express.Router();

authRouter.get('/', getAuthUser);
authRouter.post('/', postAuthUser);

export default authRouter;
