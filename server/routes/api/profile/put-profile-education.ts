import express, { Router, Response } from 'express';
import Profile, { ProfileDocument } from '../../../models/Profile';
import auth from '../../../middleware/auth';
import { check, validationResult, Result } from 'express-validator';
import {
  IGetUserAuthBodyRequest,
  IGetUserAuthInfoRequest,
} from '../api.interfaces';
import { IEducation } from './profile.interfaces';

const putProfileEducationRouter: Router = express.Router();

// @route   Put api/profile/education
// @desc    Add profile education
// @access  Private
putProfileEducationRouter.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required').not().isEmpty(),
      check('degree', 'Degree is required').not().isEmpty(),
      check('fieldofstudy', 'Field of study is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      _id,
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    }: IGetUserAuthBodyRequest = req.body;

    const newEducation: IEducation = {
      _id,
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    };

    try {
      const profile: ProfileDocument = await Profile.findOne({
        user: req.user.id,
      });
      profile.education.unshift(newEducation);

      await profile.save();
      return res.json(profile);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default putProfileEducationRouter;
