
function oneThroughTwenty() {
  let resultado = [];

  for(let i = 1; i < 21; i++) {
    resultado += i + " ";
  }
  return resultado
}
console.log(oneThroughTwenty())

function evensToTwenty() {
  let resultado = [];

   for(let i = 2; i < 22; i = i + 2) {
     resultado += i + " ";
   }
   return resultado
  }
  console.log(evensToTwenty())


function oddsToTwenty() {
    
  let resultado = [];

  for(let i = 1; i < 20; i = i + 2) {
    resultado += i + " ";
  }
   return resultado
}
 console.log(oddsToTwenty())

function multiplesOfFive() {
  let resultado = [];

  for(let i = 5; i < 101; i = i + 5) {
    resultado += i + " ";
  }
  return resultado
}
 console.log(multiplesOfFive())


function squareNumbers() {
  
  let resultado = [];
  let sqt = Math.pow();
  let x = Math.sqrt() == Number.isInteger();
  let z = Number.isInteger([]);


 for ( let i = 1; i < 11; i++) {
     resultado += (i * i) + " ";
     if (Math.sqrt(i) == z & Math.sqrt(i) >= 1){
         resultado += i;

     }
     
     
   
 }



 return resultado
}
console.log(squareNumbers())


function countingBackwards() {
  let resultado = [];

  for(let i = 20; i > 0; i--) {
    resultado += i + " ";
  }
  return resultado
}
console.log(countingBackwards())


function evenNumbersBackwards() {
  let resultado = [];
  
  for(let i = 20; i > 0; i = i - 2) {
    resultado += i + " ";
  }
  return resultado
  
}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let resultado = [];

  for(let i = 19; i > 0; i = i - 2) {
    resultado += i + " ";
  }
  return resultado
}
console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let resultado = [];

  for(let i = 100; i > 4; i = i - 5) {
    resultado += i + " ";
  }
   return resultado
}
  console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
    let resultado = [];
    let x = Math.sqrt() == Number.isInteger();
    let z = Number.isInteger([]);


   for ( let i = 10; i > 0; i--) {
       resultado += (i * i) + " ";
       if (Math.sqrt(i) == z & Math.sqrt(i) >= 1){
           resultado += i;

       } 
   }
  


   return resultado
}
console.log(squareNumbersBackwards())
