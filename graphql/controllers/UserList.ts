import { ApiResponse } from "../../utils/ApiResponse"


export const UserList = async (_, { }, { req }, _info, next, returns) => {
  try {

    return returns(Object.assign({ name: "sefa" + Math.floor(Math.random() * 100) }, ApiResponse(200, req.t("user_listed"))))

  } catch (error) {
    return returns(ApiResponse(400, req.t("user_list_error")))
  }
}
