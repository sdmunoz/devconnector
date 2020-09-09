import express, { Router, Request, Response } from 'express';
import auth from '../../../middleware/auth';
import Post, { PostDocument } from '../../../models/Post';

const getGetPostByIDRouter: Router = express.Router();

// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Private

getGetPostByIDRouter.get('/:id', auth, async (req: Request, res: Response) => {
  try {
    const post: PostDocument = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ msg: 'Post not found' });
    }
    return res.json(post);
  } catch (error) {
    console.log(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Post not found' });
    }
    return res.status(500).send('Server Error');
  }
});

export default getGetPostByIDRouter;
