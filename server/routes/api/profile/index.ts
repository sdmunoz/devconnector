import express, { Router } from 'express';
import deleteProfileExperienceRouter from './delete-profile-experience';
import getAllProfilesRouter from './get-all-proflles';
import deleteUserProfileRouter from './delete-user-profile';
import getProfileByIdRouter from './get-profile-by-id';
import getProfileMeRouter from './get-profile-me';
import postCreateUpdateRouter from './post-create-update';
const profile: Router = express.Router();
// const putProfileExperience = require('./put-profile-experience');

profile.delete('/experience/:exp_id', deleteProfileExperienceRouter);
profile.delete('/', deleteUserProfileRouter);
profile.get('/', getAllProfilesRouter);
profile.get('/user/:user_id', getProfileByIdRouter);
profile.get('/me', getProfileMeRouter);
profile.post('/', postCreateUpdateRouter);
// profile.put('/experience', putProfileExperience);

export default profile;
