export default `
type Query {
  userList: userListPayload
}

type userListPayload {
  name: String
}
`