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
function allAlice() {
  firstAlice().finished.then( () => {
    secondAlice().finished.then( () => {
      thirdAlice().finished
    });
  });
}
```

<br>

### Version 2: Promise Chain ⛓️

*(Note that there are a few different ways you can write this, because of the different forms you can use for an arrow function. Try some different forms. Which is the most concise? Which do you find the most readable?)*

<br>

**Arrow function w/explicit return statmement and curly braces for the function body.**
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

**Arrow function w/implicit returns - curly braces and 'return' keyword are omitted.**

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

### Version 3: async and await 👣

```
async function goAlice() {
  await firstAlice().finished;
  await secondAlice().finished;
  await thirdAlice().finished;
}
```