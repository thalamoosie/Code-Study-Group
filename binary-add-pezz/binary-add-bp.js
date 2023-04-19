"use strict";

const test1 = "1010";
const test2 = "1011";

const test3 = "11";
const test4 = "1"

const test5 = "1001";
const test6 = "0110";

const test7 = "10011101011";
const test8 = "00001010111";

// 101  01000010
// 101 101000010

const addBinary = function (a, b) {
  // Find largest string length:
  // a = a.split('');
  // b = b.split('');

  // console.log(a, b)

  const biggest = Math.max(a.length, b.length);
  console.log(biggest);
  
  let carry = 0;
  let added = [];
  let sum = 0;
  const res = [];
  
  // Loop over string backwards and add each element together,
  // convering to numbers for each - this will give us an array
  // of the sums
  
  for (let i = biggest - 1; i>=0; i--) {
      sum = Number(a[i]) + Number(b[i]);
      added.unshift(sum);
  }

  console.log(`Sums: ${added}`);
  
  // Loop over added array and see if the bit is first 2
  
  for (let i = added.length-1; i>=0; i--) {
    // If 1+1, increment carry by 1 and add a 0 to the res
    if (added[i] == 2) {
      carry > 0 ? res.unshift(1) : res.unshift(0)
      carry += 1;
      console.log(res);
    } else if (added [i] == 1) {
      carry > 0 ? res.unshift(0) : res.unshift(1);
      console.log(res);
    } else { // added = 0
      carry > 0 ? res.unshift(1) : res.unshift(0);
      console.log(res);
    }
    console.log(`Carry: ${carry}`)
  }
  if (carry > 0) res.unshift(1);
  console.log(res.join(''));
  return res.join('');
};

addBinary(test1, test2);
addBinary(test3, test4);
addBinary(test5, test6);
addBinary(test7, test8);

// Compare the size of the two strings and work with the longer length for looping:
// let largerLen = 0;

// if (test1.length !== test2.length) {
//   largerLen = test1.length > test2.length ? test1.length : test2.length;
// } else {
//   largerLen = test1.length;
// }
// console.log(largerLen);




// let sum = 0;
// let acc = 0;
// let resArr = [];
// for (let i = largerLen - 1; i >= 0; i--) {
//   sum = Number(test1[i]) + Number(test2[i]);
//   //   resArr.unshift(sum);
//   if (sum === 1 || sum === 0) {
//     resArr.unshift(sum);
//   } else {
//     acc = 1;
//     resArr.unshift(0);
//   }
// }
// console.log(resArr);

// Do the binary conversion
// 0 + 0 = 0, push 0
// 1 + 1 = 10 (base10 = 2), push 0 and hold 1
// 1 + 0 & 0 + 1 = 1, push 1

// const result = [];
// for (let num of resArr) {
//   if (num === 1 || num === 0) {
//     result.unshift(num);
//   } else if (num === 2) {
//     result.unshift(num);
//   }
// }
