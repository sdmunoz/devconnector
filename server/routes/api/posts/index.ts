import express, { Router } from 'express';
import postCreatePostRouter from './post-create-post';
import getAllPostsRouter from './get-all-posts';
import getPostById from './get-post-by-id';
import deletePostById from './delete-post-by-id';
import putLikeAPost from './put-like-a-post';
import putUnlikeAPost from './put-unlike-a-post';
import postCommentPost from './post-comment-post';
import deleteCommentPost from './delete-comment-post';

const postRouter: Router = express.Router();

postRouter.post('/', postCreatePostRouter);
postRouter.get('/', getAllPostsRouter);
postRouter.get('/:id', getPostById);
postRouter.delete('/:id', deletePostById);
postRouter.put('/like/:id', putLikeAPost);
postRouter.put('/unlike/:id', putUnlikeAPost);
postRouter.post('/comment/:id', postCommentPost);
postRouter.delete('/comment/:id/:comment_id', deleteCommentPost);

export default postRouter;
