import { showData, todosArr } from "../main";
import setData from "./setData";

export default function addTodo(todoText) {
  const todo = {
    id: Date.now(),
    isDone: false,
    content: todoText,
  };
  todosArr.push(todo);
  setData(todosArr);
  showData();
}
