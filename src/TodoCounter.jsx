const estilos = {
  backgroundColor: 'blue',
}

function TodoCounter({total, completed}) {
  return (
    <h2 style={{estilos}}>
      Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };