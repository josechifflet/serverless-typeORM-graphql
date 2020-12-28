import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from './resolvers';
import { createContext } from './context';
import { buildSchema } from 'type-graphql';
import connection from '../src/db';


async function getServer() {
  await connection();
  const schema = await buildSchema({
    resolvers
  });
  return new ApolloServer({
    schema,
    playground: {endpoint: '/dev/graphql'},
    context: createContext
  });
}

export function handler(event: any, ctx: any, callback: any) {
  getServer()
      .then(server => server.createHandler())
      .then(handler => handler(event, ctx, callback))
}