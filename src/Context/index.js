import React from "react";
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();

function TodoProvider(props) {

  const { item: todos, saveItem, loading, error } = useLocalStorage('todoMachineTODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(item => item.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItem(newTodos);
  }
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false
    })
    saveItem(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(item => item.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)

    saveItem(newTodos);
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}
<TodoContext.Consumer></TodoContext.Consumer>

export { TodoProvider, TodoContext };