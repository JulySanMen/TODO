import "./TodoItem.css";
import { LiaTimesSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia"; 

function TodoItem(props) {
  return ( 
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <LiaCheckSolid />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <LiaTimesSolid /> 
      </span>
    </li>
  );
}

export { TodoItem };
