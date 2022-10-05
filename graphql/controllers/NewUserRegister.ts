export const NewUserRegister = async (_, { data }, { req }, _info, next, returns) => {
  try {

    return returns({ result: JSON.stringify(data) })

  } catch (error) {
    throw new Error("hata var")
  }
}
