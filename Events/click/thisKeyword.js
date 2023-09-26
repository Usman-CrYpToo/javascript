const btn_2 = document.querySelector(".btn-2");

//with normal function it will return selected button as a value 

btn_2.addEventListener("click", function() {
     console.log("normal function this value :: ", this);
})



const btn_3 = document.querySelector(".btn-3");

// with arrow function it will return window object as the value ;
btn_3.addEventListener("click", () => {
     console.log("arrow function this value :: ", this)
})