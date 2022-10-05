export const UserList = async (_, { }, { req }, _info, next, returns) => {
  try {

    return returns({ name: "sefa" + Math.floor(Math.random() * 100) })

  } catch (error) {
    throw new Error("hata var")
  }
}
