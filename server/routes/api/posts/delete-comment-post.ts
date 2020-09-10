import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import { check } from 'express-validator';
import { IComment } from './post.interfaces';
import Post, { PostDocument } from '../../../models/Post';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const deleteCommentPostRouter: Router = express.Router();

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Delete a comment
// @access  Private
deleteCommentPostRouter.delete(
  '/comment/:id/:comment_id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const post: PostDocument = await Post.findById(req.params.id);

      const comment: IComment = post.comments.find(
        (comment: IComment) => comment._id === req.params.comment_id
      );

      if (!comment) {
        return res.status(404).send('Comment not found.');
      }

      if (comment.user.toString() !== req.user.id) {
        return res.status(401).send('User not authorized.');
      }

      const removeIndex: number = post.comments
        .map((comment: { user: string }) => comment.user.toString())
        .indexOf(req.user.id);
      post.comments.splice(removeIndex, 1);

      await post.save();

      return res.json(post.comments);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default deleteCommentPostRouter;
