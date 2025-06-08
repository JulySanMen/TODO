import {TodoCounter} from './TodoCounter';
import {TodoFilter} from './TodoFilter';
import {TodoList} from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoFilter/>

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton/> */}
      
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
