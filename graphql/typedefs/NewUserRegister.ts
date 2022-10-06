export default `
type Mutation {
  newUserRegister(data: registerData!): newUserRegisterPayload
}

type newUserRegisterPayload {
  result: String
  informative: ApiResponse
}

input registerData {
  username: String!
  password: String!
}
`