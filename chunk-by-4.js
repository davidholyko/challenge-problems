const items = [1, 2, 3, 4, 5, 6, 7, 8];

const chunk = () => {};

const output = chunk(items);

// output should equal
// [
//  [1,2,3,4]
//  [2,3,4,5]
//  [3,4,5,6]
//  [4,5,6,7]
//  [5,6,7,8]
// ]
