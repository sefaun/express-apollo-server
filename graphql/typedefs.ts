import { gql } from 'apollo-server-express'

import User from './typedefs/User'


const all_types = [
  User
].join('\n')

export const type_defs = gql`${all_types}`
