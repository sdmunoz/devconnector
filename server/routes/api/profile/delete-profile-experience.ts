import express, { Router, Response } from 'express';
import auth from '../../../middleware/auth';
import Profile, { ProfileDocument } from '../../../models/Profile';
import { IGetUserAuthInfoRequest } from '../api.interfaces';

const deleteProfileExperienceRouter: Router = express.Router();

// @route   Delete api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
deleteProfileExperienceRouter.delete(
  '/experience/:exp_id',
  auth,
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const profile: ProfileDocument = await Profile.findOne({
        user: req.user.id,
      });
      // Get remove index
      const removeIndex: number = profile.experience
        .map((item: { _id: string }) => item._id)
        .indexOf(req.params.exp_id);
      profile.experience.splice(removeIndex, 1);
      await profile.save();
      return res.json(profile);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default deleteProfileExperienceRouter;
