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

firstAlice().finished
  .then( () => {
    return secondAlice().finished;
  })
  .then( () => {
    return thirdAlice().finished;
  })

/*
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