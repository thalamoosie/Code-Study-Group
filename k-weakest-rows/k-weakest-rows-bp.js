"use strict";

/*

m x n binary matrix of 1's  and 0's
1: Soldiers (Strong)
2: Civilians (Weak)

Soldiers are positioned in front of the civilians (all to the left)

Row i is weaker than row j if:
- Number of soldiers in row i is less than number of soldiers in row j
- Both rows have the same number of soldiers and i < j

Return the indices of the k weakest rows in the matrix, ordered from weakest to strongest

Thoughts:
-A matrix in JavaScript is just an array of arrays.
-We have to loop over each array in the matrix (forEach() ?) and evaluate how many 1s there are compared to the total number of elements
-The number of arrays in the matrix we will be given is unknown and variable.
- We definitely need to "Weight" each array and keep track of their positions in the matrix


We could possibly do the following:
- Keep an array that tallies 1 to the index position of the row - that is if it's the 
6th row, it would be put at arr[5] of the "totals" array.
- Create a hash map of some sort with key: value pairs. ie  - {1 { soldiers: 2, civilians: 3 }} IF I can figure out how to do that programmatically (Rest op?)

*/

// Example Matrix 1
const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

// Example Matrix 2
const mat2 = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];

const kWeakestRows = function (mat, k) {
  let sum = 0;
  let sorter = [],
    solution = [];
  let i = 0;

  // 1. Loop over each array inside mat, add up all the 1s
  // 2. Increment i to act as the index
  // 3. Push i-1 and the sum to a new array of arrays mapping keys and values
  for (let arr of mat) {
    sum = arr.reduce((a, b) => a + b, 0);
    i++;
    sorter.push([i - 1, sum]);
  }

  // 1. sort the arrays by weakest value
  // 2. loop over the keys in sorted
  // 3. Push the key to the solution array
  let sorted = sorter.sort((a, b) => a[1] - b[1]);
  for (let [key] of sorted) {
    solution.push(key);
  }
  // Return a slice of the solution array from 1st to k
  return solution.slice(0, k);
};

console.log(kWeakestRows(mat, 3));
console.log(kWeakestRows(mat2, 2));
