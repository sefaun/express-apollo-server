import { middlewareAsync } from "nodejs-middleware"


const utill = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(1)
    }, 2000);
  })
}

const sefa = async (t, next, returns) => {

  await utill()
  await utill()
  console.log("sssss")
  return next("sefa")

}

const nisanur = async (data, t, next, returns) => {
  return returns(t("user_listed") + data)
}

export default {
  Query: {
    getSelectedUser: async (_, { }, { req }, _info) => {
      const result = await middlewareAsync(sefa, nisanur)(req.t, req.t)
      return { name: result.join(" ") }
    }
  },
  Mutation: {
    newUserRegister: (_, { data }, { req }, _info) => {
      return { result: req.t("user_created") }
    }
  }
};