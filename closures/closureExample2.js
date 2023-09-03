const myFunction = function(power){
      return  function(num){
        return num ** power;
      }
}

const cube = myFunction(3);

console.log(cube(2));


const shortForm = power => num =>  num ** power;