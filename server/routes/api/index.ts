import express, { Router, Request, Response } from 'express';
import auth from './auth/';
import posts from './posts';
import profile from './profile';
import users from './users/post-register-user';

const router: Router = express.Router();

router.use('/api/auth', auth);
router.use('/api/posts', posts);
router.use('/api/profile', profile);
router.use('/api/users', users);

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Connected!' });
});

export default router;
