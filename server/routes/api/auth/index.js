const auth = require('express').Router();
const getAuthUser = require('./get-auth-user');
const postAuthUSer = require('./post-auth-user');

auth.get('/', getAuthUser);
auth.post('/', postAuthUSer);

module.exports = auth;
