import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import Post, { PostDocument } from '../../../models/Post';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const putLikeAPostRouter: Router = express.Router();

// @route   GET api/posts/like/:id
// @desc    Like a post
// @access  Private

putLikeAPostRouter.put(
  '/like/:id',
  auth,
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const post: PostDocument = await Post.findById(req.params.id);
      if (!post) {
        return res.status(400).json({ msg: 'Post not found' });
      }

      if (
        post.likes.filter(
          (like: PostDocument) => like.user.toString() === req.user.id
        ).length > 0
      ) {
        return res.status(400).json({ msg: 'Post already liked.' });
      }

      post.likes.unshift({ user: req.user.id });
      await post.save();
      return res.json(post.likes);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default putLikeAPostRouter;
