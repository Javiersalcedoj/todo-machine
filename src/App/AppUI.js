import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../Context";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ItemLoading } from "../TodoItem/ItemLoading";

function AppUI() {
  const {
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <h2>Hubo un error</h2>}
        {loading && <ItemLoading />}
        {(!loading && !searchTodos.length) && <h2>¡Crea tu primer TODO!</h2>}

        {searchTodos.map(todo => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
}
export { AppUI };