import { TodoItem } from './TodoItem'
export const TodoList = ({ todo = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-group px-3'>
      {
                todo.map((todo) => {
                  return (
                    <TodoItem
                      {...todo}
                      key={todo.id}
                      onDeleteTodo={onDeleteTodo}
                      onToggleTodo={onToggleTodo}
                    />
                  )
                })
              }
    </ul>
  )
}
