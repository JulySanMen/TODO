import {TodoCounter} from './TodoCounter';
import {TodoFilter} from './TodoFilter';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoFilter/>

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton/> 
      
    </React.Fragment>
  );
}


export default App;
