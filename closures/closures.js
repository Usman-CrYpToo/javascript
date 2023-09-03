

function outerFunc (names) {
     
    function interFunc (){
        console.log("hello world")
        console.log(names)
    }

    return interFunc;
}

const ans = outerFunc("basit") ;
console.log(ans);
ans();