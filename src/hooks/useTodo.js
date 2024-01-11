import { todoReducer } from '../todoReducer'
import { useEffect, useReducer } from 'react'

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || []
  }
  const [todo, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[Todo] add todo',
      payload: todo
    }
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[Todo] delete todo',
      payload: id
    }
    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[Todo] toggle todo',
      payload: id
    }
    dispatch(action)
  }

  const todoCount = todo.length

  const pendingTodoCount = todo.filter((todo) => todo.done === false).length

  return {
    todo,
    todoCount,
    pendingTodoCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
