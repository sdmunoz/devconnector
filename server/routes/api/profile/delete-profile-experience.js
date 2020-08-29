const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const Profile = require('../../../models/Profile');

// @route   Delete api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
module.exports = router.delete(
  '/experience/:exp_id',
  auth,
  async (req, res) => {
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      // Get remove index
      const removeIndex = profile.experience
        .map((item) => item.id)
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
