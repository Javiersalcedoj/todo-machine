import React from "react";
import './TodoForm.css'

function TodoForm({ addTodo, openModal, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(!openModal)
  }
  const onSubmit =(event) => {
    event.preventDefault();
    if (newTodoValue === "") {
      onCancel();
      return;
    }
    addTodo(newTodoValue);
    onCancel();
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO
        <input 
          value={newTodoValue}
          onChange={onChange}
          placeholder="Ingresa tu nueva tarea"
        />
      </label>
      <div className="TodoForm--buttonContainer">
        <button 
          onClick={onCancel}
          type='button'
          className="TodoForm__button TodoForm__button--cancel"
        >
          Cancelar
        </button>
        <button
          type='submit'
          className="TodoForm__button TodoForm__button--add"
        >
          Anadir
        </button>
      </div>
    </form>
  );
}

export {TodoForm}