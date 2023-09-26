const container = document.querySelector(".container");

const h1s = container.getElementsByTagName("h1");

console.log(h1s);

const create = document.createElement("h1");
create.textContent = "this is will be count in htmlCollection";

container.append(create);
