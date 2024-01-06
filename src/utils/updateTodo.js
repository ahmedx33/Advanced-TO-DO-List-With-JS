import { showData, todosArr } from "../main";
import setData from "./setData";

export default function updateTodo(ev) {
  ev.target.parentElement.children[1].classList.toggle("hidden");
  ev.target.parentElement.children[0].classList.toggle("hidden");

  ev.target.parentElement.children[1].children[0].value =
    ev.target.parentElement.children[0].textContent;

  ev.target.parentElement.children[1].children[1].addEventListener(
    "click",
    () => {
      ev.target.parentElement.children[1].children[0].value !== "" &&
        todosArr.forEach((v) => {
          v.id === parseInt(ev.target.parentElement.getAttribute("id"))
            ? (v.content =
                ev.target.parentElement.children[1].children[0].value)
            : v.content;
        });
      showData();
      ev.target.parentElement.children[1].classList.toggle("hidden");
      ev.target.parentElement.children[0].classList.toggle("hidden");

      setData(todosArr);
    }
  );
}
