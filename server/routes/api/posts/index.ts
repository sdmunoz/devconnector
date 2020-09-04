import express, { Router } from 'express';
import getPosts from './posts';

const postRouter: Router = express.Router();

postRouter.get('/', getPosts);

export default postRouter;
