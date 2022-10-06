class ApiResponsePayload {
  statusCode: number
  message: string
}

export const ApiResponse = (statusCode: number, message?: string) => {
  let response = {
    statusCode: statusCode
  } as ApiResponsePayload

  if (message) {
    response.message = message
  }

  return { informative: response }
}