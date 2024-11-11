// Problem : Give a natural number n ,  -
// - determine if the number is prime or not.

/// A prime number is a natural number greater than 1 that is not -
// - a product of two smaller natural numbers

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(Math.sqrt(4));
console.log(isPrime(1)); // false
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true

// Big O = O(n) ====  i < number
// Big O = O(sqrt(n)) ==== i <= Math.sqrt(number)
