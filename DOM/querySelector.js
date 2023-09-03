
const mainheading = document.querySelector("#main-headline")
console.log(mainheading)

const nav_items = document.querySelector(".nav-items");
console.log(nav_items)


const allNav_items = document.querySelectorAll(".nav-items");
console.log(allNav_items)


//get content 

const getH1 = document.querySelector(".headline h2")
console.log("before ::",getH1.textContent);

//change the text of h2 
getH1.textContent= "this is changed by querySelector"
console.log("\nafter change the value :: ", getH1.textContent)


//we can also get the display:none; text from textContent

const getSpan = document.querySelector("#main-headline");
console.log(getSpan.textContent);

//with inner

const dogetSpan = document.getElementById("main-headline");
console.log(dogetSpan.innerText);