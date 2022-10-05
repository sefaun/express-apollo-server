import { gql } from 'apollo-server-express'

import UserList from './typedefs/UserList'
import NewUserRegister from './typedefs/NewUserRegister'


const all_types = [
  UserList,
  NewUserRegister
].join('\n')

export const type_defs = gql`${all_types}`
