// In mathematics, the factorial of a non-negative integer -
// - n , denoted n!, is the product of all positive integers -
// - less than or equal to n

function factorial(number) {
  let result = 1;

  for (let i = number; i > 1; i--) {
    result = result * i;
  }
  return result;
}

// factorial(0) = 1
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

// Big O = O(n)
