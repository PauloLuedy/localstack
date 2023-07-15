import { ApolloServer } from 'apollo-server-lambda';
import {resolvers} from './resolver/index';
import {typeDefs} from './schema/index';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const handler = server.createHandler();
