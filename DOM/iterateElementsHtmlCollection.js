const navItems = document.getElementsByClassName("nav-items");
const getTags= document.getElementsByTagName("a");

// simple for loop

for(let i = 0; i < navItems.length; i++){
    let navItem = navItems[i];
    let aTag = getTags[i];

    navItem.style.backgroundColor = "white";
    aTag.style.color = "green"

}


// for of loop

for(let navitem of getTags){
    navitem.style.backgroundColor = "white";
    navitem.style.color = "green"   
}


// you can use forEach method only when you convert the HtmlCollection to an array ;

let changeToArray = Array.from(getTags);

changeToArray.forEach((val) => {
    val.style.backgroundColor = "white";
    val.style.color = "green";
})
