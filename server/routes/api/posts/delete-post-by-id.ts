import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import Post, { PostDocument } from '../../../models/Post';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const deletePostByIDRouter: Router = express.Router();

// @route   DELETE api/posts/:id
// @desc    Delete post by ID
// @access  Private

deletePostByIDRouter.delete(
  '/:id',
  auth,
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const post: PostDocument = await Post.findById(req.params.id);

      if (!post) {
        return res.status(400).json({ msg: 'Post not found' });
      }

      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized.' });
      }

      post.remove();

      return res.json({ msg: 'Post removed' });
    } catch (error) {
      console.log(error.message);
      if (error.kind === 'ObjectId') {
        return res.status(400).json({ msg: 'Post not found' });
      }
      return res.status(500).send('Server Error');
    }
  }
);

export default deletePostByIDRouter;
