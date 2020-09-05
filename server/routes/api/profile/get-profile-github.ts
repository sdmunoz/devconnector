import express, { Router, Response } from 'express';
import config from 'config';
import request from 'request';
import { IGetUserAuthInfoRequest } from '../api.interfaces';
import { IGithubRequestOptions } from './profile.interfaces';

const getProfileGithubRouter: Router = express.Router();

// @route   Get api/profile/github/:username
// @desc    Get user repo from guthub
// @access  Public
getProfileGithubRouter.get(
  '/github/:username',
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const options: IGithubRequestOptions = {
        uri: `https://api.github.com/users/${
          req.params.username
        }/repos?per_page=5&sort=created:asc&client_id=${config.get(
          'githubClientId'
        )}&client_secret=${config.get('githubSecret')}`,
        method: 'GET',
        headers: { 'user-agent': 'node.js' },
      };

      request(options, (error: string, response: Response, body: string) => {
        if (error) console.error(error);

        if (response.statusCode !== 200) {
          res.status(404).json({ msg: 'Profile not found' });
        }

        res.json(JSON.parse(body));
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default getProfileGithubRouter;
