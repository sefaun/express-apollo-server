import { graphqlResolversMiddleware } from "graphql-resolvers-middleware"
import { JwtCheck } from "../middleware/JwtCheck"

import { UserList } from "./controllers/UserList"
import { NewUserRegister } from "./controllers/NewUserRegister"


export const resolvers = {
  Query: {
    userList: graphqlResolversMiddleware(JwtCheck, UserList),
  },
  Mutation: {
    newUserRegister: graphqlResolversMiddleware(JwtCheck, NewUserRegister)
  }
}