// Problem - Given a staircase of n steps, count number -
// - of distinct ways to climb to the top.
// You can either climb 1 step or 2 steps at a time

function climbingStaircase(n) {
  const numberOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    console.log(
      `${i} - ${numberOfWays[i]} = ${numberOfWays[i - 1]} + ${
        numberOfWays[i - 2]
      }`
    );
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
    console.log(numberOfWays);
  }
  return numberOfWays[n - 1];
}

console.log(climbingStaircase(5));

// Big O = O(n)
