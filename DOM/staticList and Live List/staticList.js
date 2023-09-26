// querySelector will give the static list 
// mean if you add any element in the node it will not count it

const h1s = document.querySelectorAll("h1");
console.log(h1s);

const create = document.createElement("h1");
create.textContent = "this element will not be count in the node list"

const container = document.querySelector(".container");

container.append(create)

console.log(h1s);
