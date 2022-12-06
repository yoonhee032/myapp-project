import { Link } from "react-router-dom"
import TodoItem from "./TodoItem";
import { CallbacksType, StatesType } from "../AppContainer";

type PropsType = { states: StatesType; callbacks: CallbacksType}

const TodoList = ({states, callbacks}: PropsType) => {
  
  let todoItems= states.todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />
  });

  return(
    <>
    <div>
      <Link to="todos/add">할 일 추가</Link>
    </div>
    <div>
      <ul>{todoItems}</ul>
    </div>
    </>
  );
};
export default TodoList;
