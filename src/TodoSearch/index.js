import React from "react";
import { TodoContext } from "../Context";
import './TodoSearch.css'

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (event)=>{
    setSearchValue(event.target.value);
  }
  
  return (
    <input
      className='TodoSearch'
      placeholder="Busca tus TODOs"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
export { TodoSearch }