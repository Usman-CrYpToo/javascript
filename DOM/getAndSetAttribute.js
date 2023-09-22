const getInput = document.querySelector(".form-todo input");

console.log(getInput.getAttribute("type"));

const link = document.querySelector("li a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://google.com")