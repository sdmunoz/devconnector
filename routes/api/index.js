const routes = require('express').Router();
const auth = require('./auth/auth');
const posts = require('./posts/posts');
const profile = require('./profile/profile');
const users = require('./users/users');

routes.use('/api/auth', auth);
routes.use('/api/posts', posts);
routes.use('/api/profile', profile);
routes.use('/api/users', users);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
