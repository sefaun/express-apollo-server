export function GraphqlMiddleware(...[]: Iterable<Function>): any {
  const slice = Array.prototype.slice

  const stacks = slice.call(arguments)
  const that = this
  var arg = 0
  var params = []
  var return_values = []

  if (!stacks.length) {
    throw new Error("There is no any argument functions.")
  }

  for (let i = 0; i < stacks.length; i++) {
    if (typeof stacks[i] !== "function") {
      throw new Error(`Arguments ${i + 1} is not a Function. All arguments have to be a Function.`)
    }
  }

  return async function (...[]: Iterable<string | number | object[] | Record<any, any>>) {
    arg = 0
    params = slice.call(arguments)

    function returns(_data: any) {
      return_values = slice.call(arguments);
      return return_values
    }

    if (!params.length) {
      throw new Error("There is no any arguments.")
    }

    await stacks[arg].apply(that, [...params, next, returns])

    async function next() {
      const new_args = slice.call(arguments)
      arg++

      let new_params = []

      new_params.push(...new_args)

      await stacks[arg].apply(that, [...new_params, ...params, next, returns])
    }

    return return_values.length ? return_values[0] : undefined
  }

}