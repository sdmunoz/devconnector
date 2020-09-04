import express, { Router, Request, Response } from 'express';
import Profile, { ProfileDocument } from '../../../models/Profile';

const getProfileByIdRouter: Router = express.Router();

// @route   Get api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
getProfileByIdRouter.get(
  '/user/:user_id',
  async (req: Request, res: Response) => {
    try {
      const profile: ProfileDocument = await Profile.findOne({
        user: req.params.user_id,
      }).populate('user', ['name', 'avatar']);
      if (!profile) {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      return res.json(profile);
    } catch (error) {
      console.error(error.message);
      if (error.kind === 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      return res.status(500).send('Server Error');
    }
  }
);

export default getProfileByIdRouter;
