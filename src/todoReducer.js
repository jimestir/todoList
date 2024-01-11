export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[Todo] add todo':
      return [...initialState, action.payload]

    case '[Todo] delete todo':
      return initialState.filter((todo) => todo.id !== action.payload)

    case '[Todo] toggle todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo
      })

    default:
      return initialState
  }
}
