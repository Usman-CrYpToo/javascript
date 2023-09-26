const create = document.createElement("h1");
create.textContent = "this is added before the todolist";

const todoList = document.querySelector(".todoList");
todoList.before(create);


const create1 = document.createElement("h1");

create1.textContent = "this is added after the todoList";

todoList.after(create1)