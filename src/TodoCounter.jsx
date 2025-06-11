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
    <h2 /*style={estilos}*/>
      Has completado {completed} de {total} TODOS</h2>
  );
}

export { TodoCounter };