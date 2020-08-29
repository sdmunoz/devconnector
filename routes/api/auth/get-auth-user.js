const express = require('express');
const router = express.Router();
const authMiddleware = require('../../../middleware/auth');

// @route   Get api/auth
// @desc    Authenticate user
// @access  Public
module.exports = router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    return res.json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});
