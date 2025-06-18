import './TodoFilter.css';

function TodoFilter() {
  return (
    <input
      placeholder="Buscar tareas..."
      className="TodoFilter"
      onChange={(event)=>{
        console.log('escribiste en el filter ');
        console.log(event);
        console.log(event.target);
      }}
    />
  );
}

export { TodoFilter };
