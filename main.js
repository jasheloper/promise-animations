const aliceTumbling = [
{ transform: 'rotate(0) scale(1)' },
{ transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
duration: 2000,
iterations: 1,
fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


function firstAlice() {
  return alice1.animate(aliceTumbling, aliceTiming);
}

function secondAlice() {
  return alice2.animate(aliceTumbling, aliceTiming);
}

function thirdAlice() {
  return alice3.animate(aliceTumbling, aliceTiming);
}

/*
For exploring different arrow function forms, you could try variations like using implicit returns, omitting parentheses for single parameters, or using traditional function syntax. Each variation would still maintain the promise chain structure.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/


/*
Arrow function with implicit returns - curly braces and 'return' keyword are omitted.

Note: The parentheses can only be omitted if the function has a single simple parameter. If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required.
  */
 
firstAlice().finished 
  .then( () => secondAlice().finished)
  .then( () => thirdAlice().finished);



/*
Traditional function syntax instead of arrow functions, with explicit return statements.

firstAlice().finished
  .then( function () {
    return secondAlice().finished
  })
  .then ( function () {
    return thirdAlice().finished
  })
*/


/*
Arrow function with explicit return statmement and curly braces for the function body.

firstAlice().finished
  .then( () => {
    return secondAlice().finished;
  })
  .then( () => {
    return thirdAlice().finished;
  })
    */
  


/*
callback hell 

function allAlice() {
  firstAlice().finished.then( () => {
    secondAlice().finished.then( () => {
      thirdAlice().finished
    });
  });
}

allAlice();
*/


/*
console.log(alice1.animate(aliceTumbling, aliceTiming));
console.log(alice1.animate(aliceTumbling, aliceTiming).finished);

alice1.animate(aliceTumbling, aliceTiming).finished.then( () => {
  console.log("finished!");
});
*/