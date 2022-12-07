import { useNavigate } from "react-router-dom";
import { CallbacksType, TodoItemType } from "../AppContainer";

type PropsType = { todoItem: TodoItemType; callbacks: CallbacksType };

const TodoItem = ({ todoItem, callbacks }: PropsType) => {
  const navigate = useNavigate();
  let itemClassName = "list-group-item";
  if (todoItem.done) itemClassName += " list-group-item-success";

  return (
    <li className={itemClassName}>
      <span
        className={todoItem.done ? "todo-done pointer" : "pointer"}
        onClick={() => callbacks.toggleDone(todoItem.id)}
      >
        {todoItem.todo}
        {todoItem.done ? "(완료)" : ""}
      </span>
      <span> 편집 </span>
      <span> 삭제 </span>
    </li>
  );
};
export default TodoItem;
