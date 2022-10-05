import { middlewareAsync } from "../lib/middlewareAsync";
import { JwtCheck } from "../middleware/JwtCheck";

import { UserList } from "./controllers/UserList";
import { NewUserRegister } from "./controllers/NewUserRegister";


export const resolvers = {
  Query: {
    userList: middlewareAsync(JwtCheck, UserList),
  },
  Mutation: {
    newUserRegister: middlewareAsync(JwtCheck, NewUserRegister)
  }
}