import express, { Router } from 'express';
import postCreatePostRouter from './post-create-post';
import getAllPostsRouter from './get-all-posts';
import getPostById from './get-post-by-id';
import deletePostById from './delete-post-by-id';
import putLikeAPost from './put-like-a-post';
import putUnlikeAPost from './put-unlike-a-post';

const postRouter: Router = express.Router();

postRouter.post('/', postCreatePostRouter);
postRouter.get('/', getAllPostsRouter);
postRouter.get('/:id', getPostById);
postRouter.delete('/:id', deletePostById);
postRouter.put('/like/:id', putLikeAPost);
postRouter.put('/unlike/:id', putUnlikeAPost);

export default postRouter;
