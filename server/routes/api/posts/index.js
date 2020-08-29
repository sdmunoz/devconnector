const posts = require('express').Router();
const getPosts = require('./posts');

posts.get('/', getPosts);

module.exports = posts;
