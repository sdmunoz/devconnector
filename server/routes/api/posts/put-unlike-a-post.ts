import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import Post, { PostDocument } from '../../../models/Post';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const putUnlikeAPostRouter: Router = express.Router();

// @route   GET api/posts/unlike/:id
// @desc    Unlike a post
// @access  Private

putUnlikeAPostRouter.put(
  '/unlike/:id',
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
        ).length === 0
      ) {
        return res.status(400).json({ msg: 'Post has not been liked.' });
      }

      const removeIndex: number = post.likes
        .map((like: { user: string }) => like.user.toString())
        .indexOf(req.params.id);
      post.likes.splice(removeIndex, 1);

      await post.save();
      return res.json(post.likes);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default putUnlikeAPostRouter;
