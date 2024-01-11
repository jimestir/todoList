export const TodoItem = ({ description, id, done, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li key={id} className='list-group-item d-flex justify-content-between align-items-center'>
        <span className={`${done ? 'text-decoration-line-through' : ''}`} onClick={() => onToggleTodo(id)}>{description}</span>
        <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    </>
  )
}
