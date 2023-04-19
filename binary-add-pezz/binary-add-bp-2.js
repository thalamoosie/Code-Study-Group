"use strict";

const test1 = "1010";
const test2 = "1011";

const test3 = "11";
const test4 = "1";

const test5 = "1001";
const test6 = "0110";

const test7 = "10011101011";
const test8 = "00001010111";

// 10101000010
// 101 101000010

const addBinary = function (a, b) {
  // const biggest = Math.max(a.length, b.length);
  // console.log(biggest);

  let carry = 0;
  let res = [];

  // Loop over each string from least significant to most significant
  // I had ChatGPT coach me a little bit through this without revealing the solution entirely, as I thought unshift might be slow.
  // We can smash our i and j together for this task to loop simultaneously I think:

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const firstBit = i >= 0 ? parseInt(a[i], 10) : 0;
    const secondBit = j >= 0 ? parseInt(b[j], 10) : 0;

    const sum = firstBit + secondBit + carry;
    const newBit = sum % 2;
    carry = Math.floor(sum / 2);
    res.push(newBit);
  }
  if (carry > 0) res.push(carry);

  const resString = res.reverse().join("");
  return resString;
};

console.log(addBinary(test1, test2));
console.log(addBinary(test3, test4));
console.log(addBinary(test5, test6));
console.log(addBinary(test7, test8));
