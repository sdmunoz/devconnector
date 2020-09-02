import express, { Router, Response } from 'express';
import Profile from '../../../models/Profile';
import User from '../../../models/User';
import auth from '../../../middleware/auth';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const deleteUserProfileRouter: Router = express.Router();

// @route   Delete api/profile
// @desc    Delete profile, user and post
// @access  Private
deleteUserProfileRouter.delete(
  '/',
  auth,
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      await Profile.findOneAndRemove({ user: req.user.id });
      await User.findOneAndRemove({ _id: req.user.id });
      return res.json({ msg: 'User Deleted' });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default deleteUserProfileRouter;
