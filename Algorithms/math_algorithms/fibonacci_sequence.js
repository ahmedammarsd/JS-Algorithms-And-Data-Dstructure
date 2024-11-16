// The Fibonacci sequence is a sequence -
// - in which each number is the sum of the two receding ones.

function fibonacci(number) {
  let numbers = [];
  if (number <= 1) {
    return "Sorry , The less number is 2";
  }
  for (let i = 0; i < number; i++) {
    if (i == 0 || i == 1) {
      numbers.push(i);
    } else {
      let getNumber = numbers[i - 1] + numbers[i - 2];
      numbers.push(getNumber);
    }
  }
  return numbers;
}

// Refactor The Function
function fibonacci2(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]
console.log(fibonacci(10));

// Big O = O(n)
