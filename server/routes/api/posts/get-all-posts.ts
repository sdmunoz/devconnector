import express, { Router, Request, Response } from 'express';
import auth from '../../../middleware/auth';
import Post, { PostDocument } from '../../../models/Post';

const getAllPostsRouter: Router = express.Router();

// @route   GET api/posts
// @desc    Get all posts
// @access  Private

getAllPostsRouter.get('/', auth, async (req: Request, res: Response) => {
  try {
    const posts: PostDocument[] = await Post.find().sort({ date: -1 });
    return res.json(posts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});

export default getAllPostsRouter;
