console.log(this);
console.log(fullName)
console.log(names)
console.log(func)

function names () {
     console.log("usman")
     console.log(this)
}
 
var func = function () {
    console.log("this is expression function");
}

console.log(func)

console.log(names)
var firstName = "usman";
var lastName = "atique ";
var fullName = firstName + "  " + lastName;
console.log(fullName);