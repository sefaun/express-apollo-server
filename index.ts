import { GraphQLServer } from "./server"


const bootstrap = async () => {
  const server = new GraphQLServer()

  await server.initServer()
}

bootstrap()