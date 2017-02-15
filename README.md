# aws-lambda-express-graphql

This is a demo project showing how you can use [express-graphql](https://github.com/graphql/express-graphql) on **AWS Lambda**. In the real world, you might want to use [graphql-server-lambda](https://github.com/apollographql/graphql-server/tree/master/packages/graphql-server-lambda) (because [reasons](https://github.com/apollographql/graphql-server#differences-to-express-graphql)), but this might help quickly prototype a GraphQL API.

••• [Live Demo • https://p5bgfxkpqe.execute-api.us-east-1.amazonaws.com/graphql](https://p5bgfxkpqe.execute-api.us-east-1.amazonaws.com/graphql)

This demo uses [claudia.js](https://claudiajs.com/) to deploy to Lambda, and builds upon the work in the [Running Express apps in AWS Lambda](https://github.com/claudiajs/example-projects/tree/master/express-app-lambda) guide.

Webpack and Babel are used (see `package.json`) to transpile everything into `aws-lambda-bundle.js`, allowing you to write modern JavaScript.

## Quick Start

Download the demo project and install the dependencies.

```bash
$ git clone https://github.com/flesch/aws-lambda-express-graphql.git
$ cd aws-lambda-express-graphql
$ npm install
```

Modify `schema.js` and `server.js` (or don't if you want a GraphQL API that only says `{ hello }`).

## Developing (and testing)

```bash
$ npm start
```

To test it locally, run `npm start`. This will use `nodemon` to run `aws-lambda-bundle.js` like you'd normally develop Express apps (rebuilding as changes are made).

## Deploying (and re-deploying)

```bash
$ AWS_PROFILE=default npm run deploy
```

Once you're ready to deploy to Lambda, run `AWS_PROFILE=default npm run deploy` (chaning `AWS_PROFILE`). The `deploy` command is used to `create` and `update` your Lamdba function.

## License

(The MIT License)

Copyright (c) 2016 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
