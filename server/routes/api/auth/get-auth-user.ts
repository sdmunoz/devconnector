import express, { Router, Response } from 'express';
import authMiddleware from '../../../middleware/auth';
import User, { UserDocument } from '../../../models/User';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const getAuthUserRouter: Router = express.Router();

// @route   Get api/auth
// @desc    Authenticate user
// @access  Public
getAuthUserRouter.get(
  '/',
  authMiddleware,
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const user: UserDocument = await User.findById(req.user.id).select(
        '-password'
      );
      return res.json(user);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default getAuthUserRouter;
