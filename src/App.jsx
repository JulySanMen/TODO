import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso', completed: true},
  { text: 'Llorar con la llorona', completed:true },
  { text: 'Hacer comits', completed: false },
  { text: 'Comer bien ', completed: false }, 
  
];

function App() {
  //Etados derivados: a partir de un estado podemos hacer calculos
  const [todos,setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  )

  const completedTodos= todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  //console.log('Los usuarios buscan todos de '+ searchValue);

  const completeTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <div className="TodoAppContainer">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoFilter 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
