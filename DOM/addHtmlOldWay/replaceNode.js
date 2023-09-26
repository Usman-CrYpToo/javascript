const container = document.querySelector(".container");

const create = document.createElement("li");

create.textContent = "this is the way to replace one node from another";


container.replaceChild(create , container.firstElementChild.nextElementSibling)