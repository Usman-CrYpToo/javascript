const create = document.createElement("li");
console.log(create);

create.textContent="this the correct way";




console.log(create);

const todoList = document.querySelector(".todoList");

todoList.append(create);

const li1 = document.createElement("li");

li1.textContent = "prepend send it to the first";

todoList.prepend(li1)
