import updateTodo from "./utils/updateTodo";
import addTodo from "./utils/addTodo";
import todoDone from "./utils/todoDone";
import setData from "./utils/setData";

const input = document.getElementById("writeTodo");
const create = document.querySelector(".main .add > button");
const mainTodos = document.querySelector("#app > .main .todos");
export let todosArr = [];

create.addEventListener("click", () => {
  input.value !== "".trim() && addTodo(input.value);
  input.value = "";
});

if (localStorage.getItem("todos") !== null) {
  todosArr = JSON.parse(localStorage.getItem("todos"));
  showData();
}

function deleteTodo(ev) {
  if (ev.target.classList.contains("delete")) {
    ev.target.parentElement.remove();
  }
  const newArr = todosArr.filter(
    (v) => v.id !== parseInt(ev.target.parentElement.getAttribute("id"))
  );
  todosArr = newArr;
  setData(newArr);

  showData();
}

export function showData() {
  mainTodos.innerHTML = "";
  todosArr.map((todo) => {
    const div = document.createElement("div");
    const checkBtn = document.createElement("button");
    const updateTodoBtn = document.createElement("button");
    const deleteTodoBtn = document.createElement("button");
    checkBtn.textContent = "done";
    updateTodoBtn.textContent = "update";
    deleteTodoBtn.textContent = "delete";

    checkBtn.addEventListener("click", (ev) => todoDone(ev));
    updateTodoBtn.addEventListener("click", (ev) => updateTodo(ev));
    deleteTodoBtn.addEventListener("click", (ev) => deleteTodo(ev));
    div.className = "todo";
    div.setAttribute("id", todo.id);

    const todoContent = `
      <div class="title ${todo.isDone && "checked"}">${todo.content}</div>
      <div class="hidden">
        <input type="text" />
        <button>submit</button>
      </div>
      `;
    div.innerHTML = todoContent;

    div.appendChild(checkBtn);
    div.appendChild(updateTodoBtn);
    div.appendChild(deleteTodoBtn);

    mainTodos.appendChild(div);
  });
}
