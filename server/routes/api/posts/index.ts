import express, { Router } from 'express';
import postCreatePostRouter from './post-create-post';

const postRouter: Router = express.Router();

postRouter.post('/', postCreatePostRouter);

export default postRouter;
