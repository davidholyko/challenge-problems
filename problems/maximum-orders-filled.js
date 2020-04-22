/**
 * tags: algorithms
 */

// write a function maxOrdersFilled that takes an array of numbers and number
// the array of numbers represents the number of items in an order
// and capacity represents the total number of items you can fill
// return the number of orders that can be filled

const maxOrdersFilled = (orders, capacity) => {
  // fill in
};

const output1 = maxOrdersFilled([15, 3, 2, 1], 10);
console.log(output1); // should be 3. Can fill orders with capacity 3, 2 ,1

const output2 = maxOrdersFilled([1, 3, 2, 9, 5, 5, 9, 11, 1], 10);
console.log(output2); // should be 4. Can fill orders with capacity 3, 2, 1, 1
