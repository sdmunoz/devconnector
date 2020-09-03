import express, { Router, Response } from 'express';
import Profile from '../../../models/Profile';
import auth from '../../../middleware/auth';
import { check, validationResult, Result } from 'express-validator';
import {
  IGetUserAuthBodyRequest,
  IGetUserAuthInfoRequest,
} from '../api.interfaces';

const putProfileExperienceRouter: Router = express.Router();

// @route   Put api/profile/experience
// @desc    Add profile experience
// @access  Private
putProfileExperienceRouter.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('company', 'Company is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    }: IGetUserAuthBodyRequest = req.body;

    const newExp: Record<string, unknown> = {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    };

    try {
      const profile: Profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExp);

      await profile.save();
      return res.json(profile);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default putProfileExperienceRouter;
