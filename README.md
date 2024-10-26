# Sequencing Animations

To test understanding of how to use promise-based APIs.

Update a page to play a series of animations in a sequence using promise-based techniques.

https://jasheloper.github.io/promise-animations/

<br>

## Notes

The challenge required implementation of promise based code 3 different ways:

<br>

### Version 1: Callback Hell 🔥

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

### Version 2: Promise Chain ⛓️

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
```

**Additional Instructions from project:** <br><br>
*Note that there are a few different ways you can write this, because of the different forms you can use for an arrow function. Try some different forms. Which is the most concise? Which do you find the most readable?*

<br>

**Using arrow function with explicit return statmement and curly braces for the function body.**
```
firstAlice().finished
  .then( () => {
    return secondAlice().finished;
  })
  .then( () => {
    return thirdAlice().finished;
  })
```

<br>

**Using arrow function with implicit returns - curly braces and 'return' keyword are omitted.**

⭐️ (favorite)

```
firstAlice().finished 
  .then( () => secondAlice().finished)
  .then( () => thirdAlice().finished);
```

<br>

**Traditional function syntax instead of arrow functions, with explicit return statements.**

```
firstAlice().finished
  .then( function () {
    return secondAlice().finished
  })
  .then ( function () {
    return thirdAlice().finished
  })
```


<br>

### Version 3: async and await 🛑

```
comin' soon
```