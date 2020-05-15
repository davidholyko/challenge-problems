/**
 * tags: algorithms
 */

// write a function that takes an array of arrays
// each array will be in the format [a, b] where a < b
// squash the intervals so that they dont overlap

const squashIntervals = (intervals) => {
  // fill in
};

const sample1 = [
  [1, 3],
  [2, 4],
  [5, 6],
];

const output1 = squashIntervals(sample1);
console.log(output1); // should be [[1,4], [5,6]]

const sample1 = [
  [3, 7],
  [1, 10],
  [2, 4],
  [5, 6],
];

const output1 = squashIntervals(sample1);
console.log(output1); // should be [[1,10]]
