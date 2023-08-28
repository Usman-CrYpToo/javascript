console.log(this);
console.log(fullName)
console.log(names)
console.log(func)

function names () {
     console.log("usman")
     console.log(this)
}
 let vari = "inside function "
var func = function (names) {
    console.log("this is expressions function");
    console.log(names)
    console.log(arguments)
}

func("shahid anwaer")
console.log(func)

console.log(names)
var firstName = "usman";
var lastName = "atique ";
var fullName = firstName + "  " + lastName;
console.log(fullName);