import express, { Router, Request, Response } from 'express';
import Profile, { ProfileDocument } from '../../../models/Profile';

const getAllProfilesRouter: Router = express.Router();

// @route   Get api/profile
// @desc    Get all profiles
// @access  Public
getAllProfilesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const profiles: ProfileDocument[] = await Profile.find().populate('user', [
      'name',
      'avatar',
    ]);
    return res.json(profiles);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});

export default getAllProfilesRouter;
