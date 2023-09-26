const todoList = document.querySelector(".todoList");

let inner = todoList.innerHTML;

console.log(inner)

todoList.innerHTML += "<li>this tode next</li>"