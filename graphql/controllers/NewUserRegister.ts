import { ApiResponse } from "../../utils/ApiResponse"


export const NewUserRegister = async (_, { data }, { req }, _info, next, returns) => {
  try {

    return returns(Object.assign({ result: JSON.stringify(data) }, ApiResponse(200, req.t("user_listed"))))

  } catch (error) {
    return returns(ApiResponse(400, req.t("user_create_error")))
  }
}
