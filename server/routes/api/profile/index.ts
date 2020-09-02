import express, { Router } from 'express';
import deleteProfileExperienceRouter from './delete-profile-experience';
import getAllProfilesRouter from './get-all-proflles';
import deleteUserProfileRouter from './delete-user-profile';
const profile: Router = express.Router();
// const getProfileById = require('./get-profile-by-id');
// const getProfileMe = require('./get-profile-me');
// const postCreateUpdate = require('./post-create-update');
// const putProfileExperience = require('./put-profile-experience');

profile.delete('/experience/:exp_id', deleteProfileExperienceRouter);
profile.delete('/', deleteUserProfileRouter);
profile.get('/', getAllProfilesRouter);
// profile.get('/user/:user_id', getProfileById);
// profile.get('/me', getProfileMe);
// profile.post('/', postCreateUpdate);
// profile.put('/experience', putProfileExperience);

export default profile;
