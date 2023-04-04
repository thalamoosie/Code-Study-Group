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
