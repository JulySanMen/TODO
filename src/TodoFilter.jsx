import React from 'react';
import './TodoFilter.css';

function TodoFilter() {
  //estado no solo se consume se actuliza 
  const [searchValue, setSearchValue] = React.useState('');

  console.log('Los usuarios buscan todos de '+ searchValue);

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
