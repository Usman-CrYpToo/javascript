

function outerFunc () {
     
    function interFunc (){
        console.log("hello world")
    }

    return interFunc;
}

const ans = outerFunc() ;
console.log(ans);