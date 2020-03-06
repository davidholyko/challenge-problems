// 1.
// create a promise that passes value 10 on resolve and 50 on reject

const myPromise = new Promise(function(resolve, reject) {
  // fill in
});

// 2.
// modify the promise so that it has a 50% chance of rejecting/resolving
// use Math.random() -> returns a number between 0.00000 and 1.00000

const myPromise = new Promise(function(resolve, reject) {
  // fill in
});

// 3.
// on resolve, console log the result
// on reject, console error the result

myPromise // chain
  .then(() => {})
  .catch(() => {});

// 4.
// let's say we have an array of 1000 promise
// Write code that will run all of the promises concurrently and
// then separately write code that will chain the next promise to the end of the previous
