import { gql } from 'apollo-server-express'

import ApiResponse from './typedefs/ApiResponse'
import UserList from './typedefs/UserList'
import NewUserRegister from './typedefs/NewUserRegister'


const all_types = [
  ApiResponse,
  UserList,
  NewUserRegister
].join('\n')

export const type_defs = gql`${all_types}`
