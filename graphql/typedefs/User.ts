export default `
type Query {
  getSelectedUser: getSelectedUserPayload
}

type Mutation {
  newUserRegister(data: registerData!): newUserRegisterPayload
}


type getSelectedUserPayload {
  name: String
}

type newUserRegisterPayload {
  result: String
}

input registerData {
  username: String!
  password: String!
}
`