import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ItemLoading } from "../TodoItem/ItemLoading";
import { TodoHeader } from "../TodoHeader";
import {ChangeAlert} from '../ChangeAlert/';

function App() {
  const { states, stateUpdaters} = useTodos();

  const {
    loading,
    error,
    searchTodos,
    totalTodos,
    completedTodos,
    searchValue,
    openModal,
  } = states;

  const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    addTodo,
    setOpenModal,
    sincronizeTodos,
  } = stateUpdaters;
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        searchText={searchValue}

        onError = {() => <h2>Hubo un error</h2>}
        onLoading = {() => <ItemLoading />}
        onEmptyTodos = {() => <h2>¡Crea tu primer TODO!</h2>}
        onEmptySearchResults = {(searchText) => <h2>No se encontró ningún resultado para {searchText}, prueba con otra palabra</h2>}

        render = { todo => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      
      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;