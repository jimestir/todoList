import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
import { useTodo } from './hooks/useTodo'

export const TodoApp = () => {
  const {
    todo,
    todoCount,
    pendingTodoCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  } = useTodo()
  return (
    <>
      <div className='p-3 w-29'>
        <h1>Todo App: {todoCount}, <small>Pending: {pendingTodoCount}</small></h1>
        <hr />

        <div className='row'>
          <div className='col-7'>
            <TodoList
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </div>

          <div className='col-5 px-3'>
            <h4>Add Todo</h4>
            <hr />

            <TodoAdd onNewTodo={handleNewTodo} />

          </div>
        </div>

      </div>
    </>
  )
}
