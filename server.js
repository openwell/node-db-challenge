const express = require('express');

const ProjectRouter = require('./projects/projects_router');

const server = express();

server.use(express.json());
server.use('/api/schemes', ProjectRouter);

module.exports = server;