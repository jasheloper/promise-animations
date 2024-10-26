# Sequencing Animations

To test understanding of how to use promise-based APIs.

Update a page to play a series of animations in a sequence using promise-based techniques.

<br>

## Notes

The project required to implement promise based code 3 different ways:

<br>

### Version 1: Callback Hell

```
function firstAlice() {
  return alice1.animate(aliceTumbling, aliceTiming);
}

function secondAlice() {
  return alice2.animate(aliceTumbling, aliceTiming);
}

function thirdAlice() {
  return alice3.animate(aliceTumbling, aliceTiming);
}


function allAlice() {
  firstAlice().finished.then( () => {
    secondAlice().finished.then( () => {
      thirdAlice().finished
    });
  });
}

allAlice();
```

<br>

### Version 2: Promise Chain

<br>

### Version 3: async and await