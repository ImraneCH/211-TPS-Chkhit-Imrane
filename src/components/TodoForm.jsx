import "./TodoForm.css";

export default function TodoForm({ onAdd }) {
  function handleSubmit(event) {
	event.preventDefault();
	const texte = event.target.description.value;

	if (texte !== "") {
	  onAdd(texte);
	  event.target.description.value = "";
	}
  }

  return (
	<form className="todo-input" onSubmit={handleSubmit}>
	  <input name="description" type="text" placeholder="Ajouter une tâche" />
	  <button>Ajouter</button>
	</form>
  );
}