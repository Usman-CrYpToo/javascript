const container = document.querySelector(".container");

const create = document.createElement("li");
create.textContent = "this is old way to add the element before any existing element";


container.insertBefore(create,container.firstChild)