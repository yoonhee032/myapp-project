import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CallbacksType } from "../AppContainer";
import Btn from "../components/Btn";

type PropsType = { callbacks: CallbacksType };

const AddTodo = ({ callbacks }: PropsType) => {
  const navigate = useNavigate();

  let [todo, setTodo] = useState<string>("");


  const addTodoHandler = () => {
    if (todo.trim() === "") {
      alert("빈칸을 채워주세요");
      return;
    }
    callbacks.addTodo(todo);
    navigate("/todos");
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="todo">할 일 :</label>
          <input
            type="text"
            className="form-control"
            id="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
       
        <Btn type={"button"} onClick={addTodoHandler} value={"추가"} />
        <Btn type={"button"} onClick={() => navigate("/todos")} value={"취소"} />
      </div>
    </>
  );
};

export default AddTodo;
