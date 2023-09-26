// this is the second way
const btn_2 = document.querySelector(".btn-2");

btn_2.onclick = () => {
     console.log("this  is the second way");
}


//this is the correct and third way
const btn_3 = document.querySelector(".btn-3");

btn_3.addEventListener("click", () => {
     console.log("this is correct and the third way");
})