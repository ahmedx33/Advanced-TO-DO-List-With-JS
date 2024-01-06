export default function setData(value) {
    localStorage.setItem("todos", JSON.stringify(value));
  }