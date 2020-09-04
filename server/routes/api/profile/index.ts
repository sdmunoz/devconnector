import express, { Router } from 'express';
import deleteProfileExperienceRouter from './delete-profile-experience';
import getAllProfilesRouter from './get-all-proflles';
import deleteUserProfileRouter from './delete-user-profile';
import getProfileByIdRouter from './get-profile-by-id';
import getProfileMeRouter from './get-profile-me';
import postCreateUpdateRouter from './post-create-update';
const profileRouter: Router = express.Router();
// const putProfileExperience = require('./put-profile-experience');

profileRouter.delete('/experience/:exp_id', deleteProfileExperienceRouter);
profileRouter.delete('/', deleteUserProfileRouter);
profileRouter.get('/', getAllProfilesRouter);
profileRouter.get('/user/:user_id', getProfileByIdRouter);
profileRouter.get('/me', getProfileMeRouter);
profileRouter.post('/', postCreateUpdateRouter);
// profile.put('/experience', putProfileExperience);

export default profileRouter;
