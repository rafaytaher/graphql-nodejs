import { ApolloServer, gql } from 'apollo-server-lambda';
import { readFileSync } from 'fs';
import resolvers from './graphql/resolvers';

const typeDefs = gql(readFileSync('./graphql/typeDefs.graphql', {encoding: 'utf-8'}));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    /**
    *@source: https://www.apollographql.com/docs/apollo-server/deployment/lambda/
    *ApolloServer's context function can read information about the current operation from both
    *the original Lambda data structures and the Express request and response created by @vendia/serverless-express.
    *These are provided to your context function as event, context, and express options.
    *The event object contains the API Gateway event (HTTP headers, HTTP method, body, path, ...).
    *The context object (not to be confused with the context function itself!) contains the current
    *Lambda Context (Function Name, Function Version, awsRequestId, time remaining, ...). express
    *contains req and res fields with the Express request and response. The object returned from your
    *context function is provided to all of your schema resolvers in the third context argument.
     */
    context: ({ event, context, express }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
        expressRequest: express.req
    })
});

export const action = server.createHandler();
