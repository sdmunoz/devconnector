const profile = require('express').Router();
const deleteProfileExperience = require('./delete-profile-experience');
const deleteUserPorfile = require('./delete-user-profile');
const getAllProfiles = require('./get-all-proflles');
const getProfileById = require('./get-profile-by-id');
const getProfileMe = require('./get-profile-me');
const postCreateUpdate = require('./post-create-update');
const putProfileExperience = require('./put-profile-experience');

profile.delete('/experience/:exp_id', deleteProfileExperience);
profile.delete('/', deleteUserPorfile);
profile.get('/', getAllProfiles);
profile.get('/user/:user_id', getProfileById);
profile.get('/me', getProfileMe);
profile.post('/', postCreateUpdate);
profile.put('/experience', putProfileExperience);

module.exports = profile;
