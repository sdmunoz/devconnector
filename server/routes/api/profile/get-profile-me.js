const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const Profile = require('../../../models/Profile');

// @route   Get api/profile/me
// @desc    Get current users profile
// @access  Private
module.exports = router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});
