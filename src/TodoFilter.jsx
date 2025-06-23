import React from 'react';
import './TodoFilter.css';

function TodoFilter({
  searchValue,
  setSearchValue,
}) {
  //estado no solo se consume se actuliza 

  return (
    <input
      placeholder="Buscar tareas..."
      className="TodoFilter"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoFilter };
