export default `
type Mutation {
  newUserRegister(data: registerData!): newUserRegisterPayload
}

type newUserRegisterPayload {
  result: String
}

input registerData {
  username: String!
  password: String!
}
`