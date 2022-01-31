const button = document.querySelector("button");
const addList = document.getElementById("todo-output");





button.onclick = function() {
    const newToDo = document.createElement("span");
    let textValue = document.getElementById("input-todo").value;
    newToDo.prepend(textValue);
    let list = addList.prepend(newToDo);
    return list;
}

