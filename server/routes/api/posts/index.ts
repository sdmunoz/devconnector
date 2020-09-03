import express, { Router } from 'express';
import getPosts from './posts';

const posts: Router = express.Router();

posts.get('/', getPosts);

export default posts;
