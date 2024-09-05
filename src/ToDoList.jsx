export default function TodoList({ todos, toggleComplete, deleteItem }) {
    return (
      <ul className="list">
        {todos.length === 0 && <p>Inga uppgifter kvar!</p>}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => deleteItem(todo.id)}
            >
              Radera
            </button>
          </li>
        ))}
      </ul>
    );
  }
  