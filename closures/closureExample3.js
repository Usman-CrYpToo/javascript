const myfunc =  () => {
    let check = true ;
    return function(){
         if(check){
             console.log("hello ! you called me");
             check = false;
         }
         else {
             console.log("mai aik dafa call ho chuka hun");
         }
    }
}

const play = myfunc();
play();
play();