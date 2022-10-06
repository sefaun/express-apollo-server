import { GraphqlMiddleware } from "../lib/GraphqlMiddleware";
import { JwtCheck } from "../middleware/JwtCheck";

import { UserList } from "./controllers/UserList";
import { NewUserRegister } from "./controllers/NewUserRegister";


export const resolvers = {
  Query: {
    userList: GraphqlMiddleware(JwtCheck, UserList),
  },
  Mutation: {
    newUserRegister: GraphqlMiddleware(JwtCheck, NewUserRegister)
  }
}