import express, { Router } from 'express';
import postCreatePostRouter from './post-create-post';
import getAllPostsRouter from './get-all-posts';
import getPostById from './get-post-by-id';
import deletePostById from './delete-post-by-id';

const postRouter: Router = express.Router();

postRouter.post('/', postCreatePostRouter);
postRouter.get('/', getAllPostsRouter);
postRouter.get('/:id', getPostById);
postRouter.delete('/:id', deletePostById);

export default postRouter;
