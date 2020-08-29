const express = require('express');
const router = express.Router();
const Profile = require('../../../models/Profile');

// @route   Get api/profile
// @desc    Get all profiles
// @access  Public
module.exports = router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    return res.json(profiles);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});
