// write a function chunk that chunks... (@todo add better description)

const chunk = () => {};

const output = chunk([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(output);

// output should equal
// [
//  [1,2,3,4]
//  [2,3,4,5]
//  [3,4,5,6]
//  [4,5,6,7]
//  [5,6,7,8]
// ]

/*
    BONUS: complete in O(N) time complexity
*/
