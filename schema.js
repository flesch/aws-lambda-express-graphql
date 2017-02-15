'use strict';

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'The root type defines how GraphQL operations begin. It is the entry point to constructing GraphQL queries.',
  fields: () => ({
    hello: {
      type: GraphQLString,
      args: {
        name: { type:GraphQLString }
      },
      resolve: (root, args, context) => args.name
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The mutation type defines how GraphQL operations change data.',
  fields: () => ({
    toUpperCase: {
      type: GraphQLString,
      args: {
        name: { type:GraphQLString }
      },
      resolve:(root, args, context) => args.name.toUpperCase()
    }
  })
});

const schema = new GraphQLSchema({ query:Query, mutation:Mutation });

module.exports = schema;
