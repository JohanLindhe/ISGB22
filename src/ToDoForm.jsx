import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  // Hantera form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return; // Kontroll för tom input
    addTodo(newItem); // Anropa addTodo-funktionen från App-komponenten
    setNewItem(""); // Rensa input-fältet
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Fyll i vad som ska göras idag</label>
        <input
          type="text"
          value={newItem}
          
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn btn-success">Lägg till</button>
      </div>
    </form>
  );
}
