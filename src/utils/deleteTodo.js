import showData from "../main";

export default function deleteTodo(ev) {
  if (ev.target.classList.contains("delete")) {
    ev.target.parentElement.remove();
  }
  const newArr = todosArr.filter(
    (v) => v.id !== parseInt(ev.target.parentElement.getAttribute("id"))
  );
  todosArr = newArr;
  setData(newArr);
}
