import { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'

import { type_defs } from './typedefs'
import { resolvers } from './resolvers'


export const GraphQLApiV1 = async (app: Application) => {
  const server = new ApolloServer({
    typeDefs: type_defs,
    resolvers: resolvers,
    introspection: true,
    context: ({ req }) => ({
      req,
      dataLoader: {}
    }),

    formatError: (err) => {
      return err
    }
  })

  await server.start()

  server.applyMiddleware({ app, path: '/graphql/v1' })
}