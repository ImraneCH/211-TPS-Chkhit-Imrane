import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [nom, setNom] = useState("");

  if (nom === "") {
	const saisi = prompt("Quel est ton prénom ?");
	setNom(saisi);
  }


  function addTodo(description) {
	const newTodo = {
	  id: todos.length + 1,
	  description,
	  status: false
	};
	setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
	setTodos(
	  todos.map(todo =>
		todo.id === id ? { ...todo, status: !todo.status } : todo
	  )
	);
  }

  function deleteTodo(id) {
	const newTodos = todos.filter(todo => todo.id !== id);
	setTodos(newTodos);
  }

  return (
	<div className="container">
	  <h1>Todo List de {nom}</h1>
	  <TodoForm onAdd={addTodo} />
	  <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
	</div>
  );
}
