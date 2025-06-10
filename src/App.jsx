import {TodoCounter} from './TodoCounter';
import {TodoFilter} from './TodoFilter';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el curso', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Cortar Cebolla', completed: },

];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoFilter/>

      <TodoList>
        {defaultTodos.map(todo =>(<TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
          />
          ))}
      </TodoList>

      <CreateTodoButton/> 
      
    </React.Fragment>
  );
}


export default App;
