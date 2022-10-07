import { graphqlResolverslMiddleware } from "graphql-resolvers-middleware"
import { JwtCheck } from "../middleware/JwtCheck"

import { UserList } from "./controllers/UserList"
import { NewUserRegister } from "./controllers/NewUserRegister"


export const resolvers = {
  Query: {
    userList: graphqlResolverslMiddleware(JwtCheck, UserList),
  },
  Mutation: {
    newUserRegister: graphqlResolverslMiddleware(JwtCheck, NewUserRegister)
  }
}