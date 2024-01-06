import { showData, todosArr } from "../main";
import setData from "./setData";

export default function todoDone(ev) {
  todosArr.forEach((v) => {
    if (v.id === parseInt(ev.target.parentElement.getAttribute("id"))) {
      if (!ev.target.parentElement.children[0].classList.contains("checked")) {
        v.isDone = true;
        setData(todosArr);
      } else {
        v.isDone = false;
        setData(todosArr);
      }
    }
  });
  showData();
}
