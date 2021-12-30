import React from "react";
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children  || props.render;
  return (
    <section className="TodoList__container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      
      {(!!props.totalTodos &&  !props.searchTodos.length) && props.onEmptySearchResults(props.searchText)}

      <ul>
        {(!props.loading && !props.error) && props.searchTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList }