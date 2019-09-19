const express = require('express');
const helmet = require('helmet');

FriendsRouter = require('../friends/friends-router.js');

const server = express();

server.use(express.json());
server.use('/', FriendsRouter)


module.exports = server; 