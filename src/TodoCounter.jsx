import './TodoCounter.css';

/*  const estilos = {
  backgroundColor: 'cyan',
  fontSize: '30px',
  textAlign: 'center',
  margin:0,
  padding:'48px'
}*/

function TodoCounter({total, completed}) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };