// Problem - give a number n , find the n th element of -
// - the fibonacci sequence

//let fib = [0, 1];

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  console.log(`The N Befor Call : ${n}`);
  let val = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  console.log(`The N After Call : ${n}`);
  console.log(`The Sum : `, val);
  return val;
}

//console.log(recursiveFibonacci(6)); // 8
recursiveFibonacci(6);

// Big O = O(2^n)
