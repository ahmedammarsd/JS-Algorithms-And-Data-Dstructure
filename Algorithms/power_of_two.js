// Problem - Give a positive integer n , -
// - determine if the number is a power of 2 or not.

// An integer is a power of two if there exists an integer x -
// - such that n === 2^x

// function isPowerOfTwo(n) {
//   for (let i = 0; i <= n; i++) {
//     if (Math.pow(2, i) > n) {
//       break;
//     }
//     if (Math.pow(2, i) == n) {
//       return true;
//     }
//   }
//   return false;
// }

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(2)); // true
// console.log(isPowerOfTwo(3)); // false
// console.log(isPowerOfTwo(4)); // true
// console.log(isPowerOfTwo(5)); // false
// console.log(isPowerOfTwo(6)); // false
// console.log(isPowerOfTwo(8)); // true

console.log(8 & 1);

// Big O = O(log n)

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1)) === 0;
// }
// Big O = O(1)
