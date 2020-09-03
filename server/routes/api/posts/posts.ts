import express, { Router, Request, Response } from 'express';

const getPostsRouter: Router = express.Router();

// @route   Get api/posts
// @desc    Test route
// @access  Public
getPostsRouter.get('/', (req: Request, res: Response) =>
  res.send('Posts Route')
);

export default router;
