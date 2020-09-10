import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import { check, validationResult, Result } from 'express-validator';
import User, { UserDocument } from '../../../models/User';
import { IComment } from './post.interfaces';
import Post, { PostDocument } from '../../../models/Post';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const postCommentPostRouter: Router = express.Router();

// @route   POST api/posts/comment/:id
// @desc    Comment a post
// @access  Private
postCommentPostRouter.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user: UserDocument = await User.findById(req.user.id).select(
        '-password'
      );
      const post: PostDocument = await Post.findById(req.params.id);

      const newComment: IComment = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      post.comments.unshift(newComment);

      post.save();
      return res.json(post.comments);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default postCommentPostRouter;
