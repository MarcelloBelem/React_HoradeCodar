import { useState } from "react";

import "./TodoApp.css";

const TodoApp = () => {
  // Lista de tarefas

  const [todos, setTodos] = useState([]);

  // Estado de texto da tarefa
  const [inputValue, setInputValue] = useState("");

  // Adicionar tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      // Cria objeto com os dados do form
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      // Adiciona o objeto no array Todos
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      // Zera o campo de adicionar tarefa
      setInputValue("");
    }
  };

  // Excluir Tarefa
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>

      {/* Form para adicionar tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-field"
          required
          placeholder="Adicione uma tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adcionar
        </button>
      </form>

      {/* Lista de tarefas */}
      {todos.length === 0 && <p className="empty">Não há tarefas...</p>}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <p>{todo.text}</p>
            <button
              className="btn-delete-item"
              onClick={() => handleDelete(todo.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
