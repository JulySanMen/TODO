import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

// ✅ debe estar aquí
const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Hacer comits', completed: false },
  { text: 'Comer bien ', completed: false }, 
];

function App() {
  return (
    <div className="TodoAppContainer">
      <TodoCounter completed={16} total={25} />
      <TodoFilter />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
