const input = document.querySelector("#input-todo");
const form = document.querySelector(".form");
// const button = document.querySelector("button");
const addList = document.getElementById("todo-output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDoItem = document.createElement("div");
  toDoItem.innerText = input.value;
  toDoItem.className = "todo-item";
  addList.appendChild(toDoItem);
  input.value = "";
  toDoItem.style.backgroundColor = "grey";
  toDoItem.style.fontSize = "20px";
  toDoItem.style.border = "1px solid black";

  toDoItem.addEventListener("click", () => {
    toDoItem.remove();
  });
});

// button.onclick = function() {
//     const newToDo = document.createElement("span");
//     let textValue = document.getElementById("input-todo").value;
//     newToDo.prepend(textValue);
//     let list = addList.prepend(newToDo);
//     return list;
// }
