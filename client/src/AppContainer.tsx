import { useState } from "react";
import produce from "immer";
import App from "./App";

export type TodoItemType = {
  id: number;
  todo: string;

  done: boolean;
};

export type StatesType = {
  todoList: Array<TodoItemType>;
};

export type CallbacksType = {
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
  updateTodo: (id: number, todo: string, done: boolean) => void;
};

const AppContainer = () => {
  const [todoList, setTodoList] = useState<Array<TodoItemType>>([
    { id: 1, todo: "Es6학습", done: false },
    { id: 2, todo: "React 학습", done: false },
    { id: 3, todo: "ContextAPI 학습", done: true },
    { id: 4, todo: "야구 경기 관람", done: false },
  ]);

  const addTodo = (todo: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const updateTodo = (id: number, todo: string, done: boolean) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index] = { ...draft[index], todo, done };
    });
    setTodoList(newTodoList);
  };

  const callbacks: CallbacksType = {
    addTodo,
    deleteTodo,
    updateTodo,
    toggleDone,
  };
  const states: StatesType = { todoList };

  return <App callbacks={callbacks} states={states} />;
};
export default AppContainer;
