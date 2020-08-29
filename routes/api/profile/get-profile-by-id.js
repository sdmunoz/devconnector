const express = require('express');
const router = express.Router();
const Profile = require('../../../models/Profile');

// @route   Get api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
module.exports = router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    return res.status(500).send('Server Error');
  }
});
