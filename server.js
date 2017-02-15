'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { createServer, proxy } = require('aws-serverless-express');

const { NODE_ENV = 'development', PORT = 3000 } = process.env;
const { name, version } = require('./package.json');

const app = express();

app.enable('trust proxy');
app.disable('x-powered-by');

app.set('json spaces', 2);

app.use(require('body-parser').json());
app.use('/', graphqlHTTP({ schema:require('./schema'), graphiql:true }));

const server = createServer(app);

if (!process.env.LAMBDA_TASK_ROOT) {
  server.listen(PORT, () => {
    const { port } = server.address();
    console.log(`${name}@v${version} is running on http://localhost:${port}/`);
  });
}

module.exports.handler = (event, context) => proxy(server, event, context);
