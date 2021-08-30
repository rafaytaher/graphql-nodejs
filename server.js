const {ApolloServer, gql} = require('apollo-server-lambda');

const fs = require('fs');

const resolvers = require('./graphql/resolvers');

const typeDefs = gql(fs.readFileSync('./graphql/typeDefs.graphql', {encoding: 'utf-8'}));

const server = new ApolloServer({typeDefs, resolvers});

exports.action = server.createHandler();
