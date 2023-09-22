const navItems = document.querySelectorAll(".nav-items a");

//simple for loop ;

for(let i = 0 ; i < navItems.length; i++) {
    navItems[i].style.backgroundColor = "white";
    navItems[i].style.color = "green";
}

// for of loop

for(let navItem of navItems){
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
}

// you can use forEach loop with the NodeList i.e No need to convert it in the Array;

navItems.forEach((val) => {
     val.style.backgroundColor = "white";
     val.style.color = "green";
})