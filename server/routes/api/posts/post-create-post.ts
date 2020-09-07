import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import { check, validationResult, Result } from 'express-validator';
import User, { UserDocument } from '../../../models/User';
// import Profile, { ProfileDocument } from '../../../models/Profile';
import Post, { PostDocument } from '../../../models/Post';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const postCreatePostRouter: Router = express.Router();

// @route   POST api/posts
// @desc    Create a post
// @access  Private
postCreatePostRouter.post(
  '/',
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

      const newPost: PostDocument = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post: PostDocument = await newPost.save();
      return res.json(post);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default postCreatePostRouter;
