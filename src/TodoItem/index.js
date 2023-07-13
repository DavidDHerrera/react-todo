import './TodoItem.css';

function TodoItem(props) {
  return (
    <li>
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
          
          &#x2714;
        </span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span className={`Icon Icon-delete`} onClick={props.onDelete} >&#x2716;</span>
    </li>
  );
}

export { TodoItem }