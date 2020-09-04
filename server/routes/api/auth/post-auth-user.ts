import express, { Router, Response } from 'express';
import User from '../../../models/User';
import config from 'config';
import { check, validationResult, Result } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IGetUserAuthBodyRequest } from '../api.interfaces';

const postAuthUserRouter: Router = express.Router();

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
postAuthUserRouter.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req: IGetUserAuthBodyRequest, res: Response) => {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password }: IGetUserAuthBodyRequest = req.body;

    try {
      const user: User = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch: boolean = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload: unknown = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 3600 },
        (err: string, token: string) => {
          if (err) return err;
          return res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default postAuthUserRouter;
