const express = require('express');

const ProjectRouter = require('./projects/projects_router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);

module.exports = server;