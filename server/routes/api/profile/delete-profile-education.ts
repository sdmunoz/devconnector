import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import Profile, { ProfileDocument } from '../../../models/Profile';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const deleteProfileEducationRouter: Router = express.Router();

// @route   Delete api/profile/education/:exp_id
// @desc    Delete education from profile
// @access  Private
deleteProfileEducationRouter.delete(
  '/education/:edu_id',
  auth,
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const profile: ProfileDocument = await Profile.findOne({
        user: req.user.id,
      });
      // Get remove index
      const removeIndex: number = profile.education
        .map((item: { _id: string }) => item._id)
        .indexOf(req.params.edu_id);
      profile.education.splice(removeIndex, 1);
      await profile.save();
      return res.json(profile);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default deleteProfileEducationRouter;
