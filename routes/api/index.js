const routes = require('express').Router();
const auth = require('./auth/index');
const posts = require('./posts/index');
const profile = require('./profile/index');
const users = require('./users/post-register-user');

routes.use('/api/auth', auth);
routes.use('/api/posts', posts);
routes.use('/api/profile', profile);
routes.use('/api/users', users);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
