import jwt from 'jsonwebtoken'


export const JwtCheck = async (_, { }, { req }, _info, next, returns) => {
  try {
    const token = req.headers.authorization.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

    return next()
  } catch (error) {
    return returns({ name: "token error" })
  }
}