import express, { Router, Response } from 'express';
import Profile, { ProfileDocument } from '../../../models/Profile';
import auth from '../../../middleware/auth';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const getProfleMeRouter: Router = express.Router();

// @route   Get api/profile/me
// @desc    Get current users profile
// @access  Private
getProfleMeRouter.get(
  '/me',
  auth,
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const profile: ProfileDocument = await Profile.findOne({
        user: req.user.id,
      }).populate('user', ['name', 'avatar']);
      if (!profile) {
        return res
          .status(400)
          .json({ msg: 'There is no profile for this user' });
      }
      return res.json(profile);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default getProfleMeRouter;
