const create = document.createElement("h1");

create.textContent = "this is original node";

const todoList = document.querySelector(".todoList");
todoList.append(create);

const create2 = create.cloneNode(true); // true is used to copy the orignal node textContent;
create2.textContent = "this is the copy node"
todoList.prepend(create2);