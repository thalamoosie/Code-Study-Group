'use strict';

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
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1],
]

// Example Matrix 2
const mat2 = [
    [1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]

]

// [0][1][2]
// 
const weirdMat = [
    ['axel', 'penguin', 'dirt'],
    ['scramble', 'gwar', 'rez'],
    ['floppy', 'circuit', 'cap'],
]

// Takes the matrix as the first arg, and k is the # of rows that we are concerned with
// mat is a number[][]

const kWeakestRows = function(mat, k) {
    console.log('Function here.')
}

// for (let i=0; i < weirdMat.length; i++) {
//     for(let j=0; j < weirdMat.length; j++) {
//         console.log(`i: ${i} | j: ${j} ${weirdMat[i][j]}`);

//     }

// }

let sum = 0;
let solution = [];
let solObj = {};
let i = 0;

// Loop through each array within the matrix
// Take the sum of each 
for (let arr of mat) {
    sum = arr.reduce((a,b) => a+b, 0);
    solution.push(sum);
    console.log(sum);
}



// Create Object based on array of sums assigning each one to its respective index number:
for (let i=0; i<solution.length; i++) {
    solObj[i] = solution[i];
    console.log(i, solObj)
}

// Loop over key/value pairs and return an array of 
for (let  [key, value] of Object.entries(solObj)) {
    // If 
    console.log(`${key} index of this score: ${value}`)
}
