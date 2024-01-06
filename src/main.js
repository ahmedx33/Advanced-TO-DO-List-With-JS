import updateTodo from "./utils/updateTodo";
import addTodo from "./utils/addTodo";
import deleteTodo from "./utils/deleteTodo";

const input = document.getElementById("writeTodo");
const create = document.querySelector(".main .add > button");
const mainTodos = document.querySelector("#app > .main .todos");
export let todosArr = [];

create.addEventListener("click", () => {
  input.value !== "" && addTodo(input.value);
  input.value = "";
});

if (localStorage.getItem("todos") !== null) {
  todosArr = JSON.parse(localStorage.getItem("todos"));
  showData();
}



export function showData() {
  mainTodos.innerHTML = "";
  todosArr.map((todo) => {
    const div = document.createElement("div");
    div.className = "todo";
    div.setAttribute("id", todo.id);

    const todoContent = `
      <div class="title ${todo.isDone && "checked"}">${todo.content}</div>
      <div class="hidden">
        <input type="text" />
        <button>submit</button>
      </div>
      <button class="checkBtn " onclick="todoDone(event)"">done</button> 
      <button onclick="updateTodo(event)">update</button>
      <button class="delete" onclick="deleteTodo(event)">delete</button>`;
    div.innerHTML = todoContent;

    mainTodos.appendChild(div);
  });
}


