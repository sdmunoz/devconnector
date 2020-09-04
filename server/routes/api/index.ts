import express, { Router, Request, Response } from 'express';
import authRouter from './auth/';
import postRouter from './posts';
import profileRouter from './profile';
import userRouter from './users/post-register-user';

const router: Router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api/posts', postRouter);
router.use('/api/profile', profileRouter);
router.use('/api/users', userRouter);

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Connected!' });
});

export default router;
