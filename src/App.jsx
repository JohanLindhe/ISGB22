import { useState, useEffect } from "react";
import "./style.css";
import TodoForm from "./ToDoForm.jsx";
import TodoList from "./ToDoList.jsx";

export default function App() {
  const [toDo, setToDo] = useState(() => {
    // Hämta todo-listan från localStorage vid första laddningen
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Spara todo-listan i localStorage varje gång den uppdateras
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDo));
  }, [toDo]);

  function addTodo(title) {
    setToDo((currentToDo) => [
      ...currentToDo,
      { id: crypto.randomUUID(), title: title, completed: false },
    ]);
  }

  function deleteItem(id) {
    setToDo((currentToDo) =>
      currentToDo.filter((todo) => todo.id !== id)
    );
  }

  function toggleComplete(id) {
    setToDo((currentToDo) =>
      currentToDo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className="header">Att göra: </h1>
      <TodoList
        todos={toDo}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />
    </>
  );
}
